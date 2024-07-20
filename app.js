require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import cors
const referralRoutes = require('./src/routes/referalRoutes');
const { errorHandler } = require('./src/middleware/errorhandler');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient(); // Initialize Prisma Client

// Apply CORS middleware
app.use(cors()); // This will allow all origins. Customize as needed.

// Apply body-parser middleware
app.use(bodyParser.json());

// Register routes
app.use('/api/referrals', referralRoutes);

// Error handling middleware
app.use(errorHandler);

// Function to check database connection
async function checkDatabaseConnection() {
  try {
    await prisma.$queryRaw`SELECT 1`; // Simple query to test the connection
    console.log('Database connection is successful.');
  } catch (error) {
    console.error('Error connecting to the database:', error.message);
    process.exit(1); // Exit the process with failure code
  } finally {
    await prisma.$disconnect(); // Disconnect Prisma Client
  }
}

// Check database connection and then start the server
checkDatabaseConnection().then(() => {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
