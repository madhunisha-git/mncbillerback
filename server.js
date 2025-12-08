const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
require('dotenv').config();
const { storage } = require('./Config/cloudinary');

const app = express();

app.use(cors());
app.use(express.json({ limit: '50mb' })); // Only this — DO NOT use urlencoded!

// CRITICAL: Let multer handle multipart forms
const upload = multer({
  limits: { fileSize: 20 * 1024 * 1024 }, // 20MB
  storage: multer.memoryStorage()
});

// Routes
app.use('/api', require('./Router/Inventory.router'));
app.use('/api', require('./Router/Admin.router'));
app.use('/api', require('./Router/Booking.router'));
app.use('/api', require('./Router/Company.router'));

// Error handler
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ error: err.message || 'Server Error' });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});