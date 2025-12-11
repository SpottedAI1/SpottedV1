const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { connectToDatabase } = require('./config');
const authRoutes = require('./routes/auth');

const app = express();

// Middleware
app.use(cors({
  origin: [
    'http://localhost:3000',
    'http://localhost:5000',
    'http://127.0.0.1:3000',
    'https://spotted-v1.vercel.app',
    'https://spottedv1-2.onrender.com',
    process.env.FRONTEND_URL || 'https://spotted-v1.vercel.app'
  ],
  credentials: true
}));
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Backend is running' });
});

const PORT = process.env.PORT || 5000;

// Start server and connect to database
connectToDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Failed to start server:', error);
    process.exit(1);
  });
