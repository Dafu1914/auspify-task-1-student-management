import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db';
import studentRoutes from './routes/studentRoutes';

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parses incoming JSON requests

// Routes
app.use('/api/students', studentRoutes);

// Basic test route
app.get('/', (req, res) => {
  res.send('Auspify Student Management API is running...');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});