require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const resumeRoutes = require('./routes/resumeRoutes');

const app = express();
connectDB();


app.use(cors());
app.use(express.json());
app.use('/api/resumes', resumeRoutes);

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/resume_builder_db')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

// Simple test route
app.get('/', (req, res) => res.send('API is running...'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
