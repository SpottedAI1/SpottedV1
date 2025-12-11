const nodemailer = require('nodemailer');

// Create a transporter using Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'getspottedai@gmail.com',
    pass: process.env.EMAIL_PASSWORD // Use App Password for Gmail
  }
});

// Function to send OTP email
async function sendOtpEmail(recipientEmail, otp) {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER || 'getspottedai@gmail.com',
      to: recipientEmail,
      subject: 'Your Spotted AI Verification Code',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px;">
            <h2 style="color: #333; margin-bottom: 20px;">Email Verification</h2>
            
            <p style="color: #666; font-size: 16px; margin-bottom: 20px;">
              Thank you for signing up with Spotted AI! Use the verification code below to complete your registration.
            </p>
            
            <div style="background-color: #fff; padding: 20px; border-radius: 8px; text-align: center; margin: 20px 0;">
              <p style="color: #999; font-size: 14px; margin-bottom: 10px;">Your verification code:</p>
              <h1 style="color: #007bff; font-size: 36px; letter-spacing: 5px; margin: 0; font-weight: bold;">
                ${otp}
              </h1>
            </div>
            
            <p style="color: #999; font-size: 14px; margin: 20px 0;">
              This code will expire in 10 minutes.
            </p>
            
            <p style="color: #999; font-size: 13px; margin-top: 30px; border-top: 1px solid #ddd; padding-top: 20px;">
              If you didn't request this code, please ignore this email.
            </p>
            
            <p style="color: #999; font-size: 12px; margin-top: 20px;">
              © 2024 Spotted AI. All rights reserved.
            </p>
          </div>
        </div>
      `
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(`OTP email sent to ${recipientEmail}. Message ID: ${info.messageId}`);
    return { success: true, message: 'OTP sent successfully' };
  } catch (error) {
    console.error('Error sending OTP email:', error);
    throw error;
  }
}

module.exports = { sendOtpEmail };
