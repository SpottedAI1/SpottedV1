const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { getDatabase } = require('../config');
const { ObjectId } = require('mongodb');
const router = express.Router();

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

module.exports = router;
