const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { getDatabase } = require('../config');
const { ObjectId } = require('mongodb');
const { OAuth2Client } = require('google-auth-library');
const { sendOtpEmail } = require('../services/mailService');
const admin = require('firebase-admin');
const router = express.Router();

// Initialize Google OAuth Client
const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// Initialize Firebase Admin SDK if service account is available
let firebaseInitialized = false;
try {
  if (process.env.FIREBASE_SERVICE_ACCOUNT_KEY) {
    const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      projectId: "getspotted-ai"
    });
    firebaseInitialized = true;
  }
} catch (error) {
  console.log('Firebase Admin SDK not initialized - using MongoDB auth only');
}

// Helper function to generate OTP
function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// Helper function to generate temporary token for OTP verification
function generateTempToken(email) {
  return jwt.sign({ email, type: 'otp' }, process.env.JWT_SECRET, { expiresIn: '10m' });
}

// Helper function to get or create user from Firebase
async function getOrCreateUserFromFirebase(firebaseUser) {
  const db = getDatabase();
  const usersCollection = db.collection('users');

  try {
    // Try to find user by Firebase UID
    let user = await usersCollection.findOne({ firebaseUid: firebaseUser.uid });

    if (!user) {
      // Create new user from Firebase data
      const result = await usersCollection.insertOne({
        firebaseUid: firebaseUser.uid,
        email: firebaseUser.email,
        name: firebaseUser.displayName || '',
        createdAt: new Date(),
        updatedAt: new Date()
      });
      
      user = await usersCollection.findOne({ _id: result.insertedId });
    }

    return user;
  } catch (error) {
    console.error('Error in getOrCreateUserFromFirebase:', error);
    throw error;
  }
}

// Register
router.post('/register', async (req, res) => {
  try {
    const { email, password, name } = req.body;

    // Validate input
    if (!email || !password || !name) {
      return res.status(400).json({ message: 'Please provide email, password, and name' });
    }

    const db = getDatabase();
    const usersCollection = db.collection('users');

    // Check if user exists
    const existingUser = await usersCollection.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user
    const result = await usersCollection.insertOne({
      name,
      email,
      password: hashedPassword,
      createdAt: new Date(),
      updatedAt: new Date()
    });

    res.status(201).json({ 
      message: 'User registered successfully',
      userId: result.insertedId
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({ message: 'Please provide email and password' });
    }

    const db = getDatabase();
    const usersCollection = db.collection('users');

    // Check if user exists
    const user = await usersCollection.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Compare password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT
    const token = jwt.sign({ userId: user._id.toString(), email: user.email }, process.env.JWT_SECRET, {
      expiresIn: '24h'
    });

    res.json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get user details
router.get('/user/:userId', async (req, res) => {
  try {
    const { userId } = req.params;

    const db = getDatabase();
    const usersCollection = db.collection('users');

    const user = await usersCollection.findOne({ _id: new ObjectId(userId) });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({
      message: 'User details fetched successfully',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        organizationName: user.organizationName || null,
        role: user.role || null,
        referralSource: user.referralSource || null,
        onboardingCompletedAt: user.onboardingCompletedAt || null
      }
    });
  } catch (error) {
    console.error("Get user error:", error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Save onboarding details
router.post('/onboarding', async (req, res) => {
  try {
    const { userId, organizationName, role, referralSource } = req.body;

    console.log("Onboarding request received:", { userId, organizationName, role, referralSource });

    // Validate input
    if (!userId || !organizationName) {
      return res.status(400).json({ message: 'Please provide userId and organizationName' });
    }

    const db = getDatabase();
    const usersCollection = db.collection('users');

    // Update user with onboarding details
    const result = await usersCollection.updateOne(
      { _id: new ObjectId(userId) },
      {
        $set: {
          organizationName,
          role: role || null,
          referralSource: referralSource || null,
          onboardingCompletedAt: new Date(),
          updatedAt: new Date()
        }
      }
    );

    console.log("Update result:", result);

    if (result.matchedCount === 0) {
      console.log("User not found with ID:", userId);
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({
      message: 'Onboarding details saved successfully',
      userId
    });
  } catch (error) {
    console.error("Onboarding error:", error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Update user profile
router.put('/user/:userId/update', async (req, res) => {
  try {
    const { userId } = req.params;
    const { name, organizationName, role, referralSource } = req.body;

    console.log("Update user request:", { userId, name, organizationName, role, referralSource });

    const db = getDatabase();
    const usersCollection = db.collection('users');

    // Build update object with only provided fields
    const updateData = {};
    if (name) updateData.name = name;
    if (organizationName) updateData.organizationName = organizationName;
    if (role) updateData.role = role;
    if (referralSource) updateData.referralSource = referralSource;
    updateData.updatedAt = new Date();

    const result = await usersCollection.updateOne(
      { _id: new ObjectId(userId) },
      { $set: updateData }
    );

    console.log("Update result:", result);

    if (result.matchedCount === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({
      message: 'User profile updated successfully',
      userId
    });
  } catch (error) {
    console.error("Update user error:", error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Send OTP for signup
router.post('/send-otp', async (req, res) => {
  try {
    const { email, name, password } = req.body;

    if (!email || !name || !password) {
      return res.status(400).json({ message: 'Email, name, and password are required' });
    }

    const db = getDatabase();
    const usersCollection = db.collection('users');
    const otpCollection = db.collection('otps');

    // Check if user already exists
    const existingUser = await usersCollection.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Generate OTP
    const otp = generateOTP();
    const hashedPassword = await bcrypt.hash(password, 10);

    // Store OTP with expiry (10 minutes)
    const otpData = {
      email,
      otp,
      hashedPassword,
      name,
      createdAt: new Date(),
      expiresAt: new Date(Date.now() + 10 * 60 * 1000) // 10 minutes
    };

    await otpCollection.deleteMany({ email }); // Remove old OTPs
    await otpCollection.insertOne(otpData);

    // Send OTP email
    try {
      await sendOtpEmail(email, otp);
      console.log(`OTP email sent to ${email}`);
    } catch (emailError) {
      console.error(`Failed to send OTP email to ${email}:`, emailError);
      // Continue even if email fails - development fallback
      console.log(`OTP for ${email}: ${otp}`); 
    }

    res.json({
      message: 'OTP sent successfully',
      tempToken: generateTempToken(email),
      email
    });
  } catch (error) {
    console.error("Send OTP error:", error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Verify OTP and create user
router.post('/verify-otp', async (req, res) => {
  try {
    const { email, otp } = req.body;

    if (!email || !otp) {
      return res.status(400).json({ message: 'Email and OTP are required' });
    }

    const db = getDatabase();
    const otpCollection = db.collection('otps');
    const usersCollection = db.collection('users');

    // Find OTP
    const otpData = await otpCollection.findOne({ email });

    if (!otpData) {
      return res.status(400).json({ message: 'OTP not found or expired' });
    }

    // Check if OTP is expired
    if (new Date() > otpData.expiresAt) {
      await otpCollection.deleteOne({ email });
      return res.status(400).json({ message: 'OTP has expired' });
    }

    // Verify OTP
    if (otpData.otp !== otp) {
      return res.status(400).json({ message: 'Invalid OTP' });
    }

    // Create user
    const result = await usersCollection.insertOne({
      email,
      name: otpData.name,
      password: otpData.hashedPassword,
      createdAt: new Date(),
      updatedAt: new Date()
    });

    // Delete used OTP
    await otpCollection.deleteOne({ email });

    // Generate JWT
    const token = jwt.sign(
      { userId: result.insertedId.toString(), email },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.json({
      message: 'User registered successfully',
      token,
      user: {
        id: result.insertedId,
        name: otpData.name,
        email
      }
    });
  } catch (error) {
    console.error("Verify OTP error:", error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Google Login
router.post('/google', async (req, res) => {
  try {
    const { token } = req.body;

    if (!token) {
      return res.status(400).json({ message: 'Token is required' });
    }

    // Verify Google Token
    const ticket = await googleClient.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID
    });

    const payload = ticket.getPayload();
    const { email, name, picture, sub } = payload;

    const db = getDatabase();
    const usersCollection = db.collection('users');

    // Check if user exists
    let user = await usersCollection.findOne({ email });

    if (!user) {
      // Create new user from Google data
      const result = await usersCollection.insertOne({
        email,
        name,
        picture,
        googleId: sub,
        password: null, // No password for Google auth
        createdAt: new Date(),
        updatedAt: new Date()
      });

      user = await usersCollection.findOne({ _id: result.insertedId });
    }

    // Generate JWT token
    const jwtToken = jwt.sign(
      { userId: user._id.toString(), email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.json({
      message: 'Google login successful',
      token: jwtToken,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        picture: user.picture
      }
    });
  } catch (error) {
    console.error("Google login error:", error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Verify Firebase token and create/update user in MongoDB
router.post('/verify-firebase-token', async (req, res) => {
  try {
    const { token } = req.body;

    if (!token) {
      return res.status(400).json({ message: 'Token is required' });
    }

    // Decode Firebase token to get user info
    // Firebase tokens are JWT tokens
    const parts = token.split('.');
    if (parts.length !== 3) {
      return res.status(401).json({ message: 'Invalid token format' });
    }

    try {
      // Decode the payload (middle part)
      const payload = JSON.parse(Buffer.from(parts[1], 'base64').toString());
      
      const firebaseUid = payload.sub; // Firebase UID is in 'sub' claim
      const email = payload.email;
      const name = payload.name || '';

      if (!firebaseUid || !email) {
        return res.status(401).json({ message: 'Invalid token claims' });
      }

      const db = getDatabase();
      const usersCollection = db.collection('users');

      // Try to find user by Firebase UID
      let user = await usersCollection.findOne({ firebaseUid });

      if (!user) {
        // Create new user from Firebase data
        const result = await usersCollection.insertOne({
          firebaseUid,
          email,
          name: name || '',
          createdAt: new Date(),
          updatedAt: new Date()
        });
        
        user = await usersCollection.findOne({ _id: result.insertedId });
      } else {
        // Update user info if needed
        await usersCollection.updateOne(
          { firebaseUid },
          { $set: { updatedAt: new Date() } }
        );
      }

      // Generate JWT for your app
      const jwtToken = jwt.sign(
        { userId: user._id.toString(), firebaseUid, email },
        process.env.JWT_SECRET,
        { expiresIn: '24h' }
      );

      res.json({
        message: 'Firebase token verified',
        token: jwtToken,
        user: {
          id: user._id,
          firebaseUid,
          name: user.name || name || '',
          email
        }
      });
    } catch (decodeError) {
      console.error('Token decode error:', decodeError);
      // If we can't decode, try to verify with Firebase Admin SDK if available
      if (firebaseInitialized) {
        try {
          const decodedToken = await admin.auth().verifyIdToken(token);
          const firebaseUser = await admin.auth().getUser(decodedToken.uid);
          
          const db = getDatabase();
          const usersCollection = db.collection('users');
          const user = await getOrCreateUserFromFirebase(firebaseUser);

          const jwtToken = jwt.sign(
            { userId: user._id.toString(), firebaseUid: firebaseUser.uid, email: firebaseUser.email },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
          );

          res.json({
            message: 'Firebase token verified',
            token: jwtToken,
            user: {
              id: user._id,
              firebaseUid: firebaseUser.uid,
              name: user.name || firebaseUser.displayName || '',
              email: firebaseUser.email
            }
          });
        } catch (adminError) {
          console.error('Firebase Admin verification error:', adminError);
          return res.status(401).json({ message: 'Invalid or expired token' });
        }
      } else {
        return res.status(401).json({ message: 'Invalid token format' });
      }
    }
  } catch (error) {
    console.error("Firebase token verification error:", error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
