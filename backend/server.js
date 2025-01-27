const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const Package = require('./models/Package');


// Initialize dotenv
dotenv.config();

// Create an Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parses incoming JSON requests
app.use(express.urlencoded({ extended: true })); // Parses URL-encoded payloads

// MongoDB connection
mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.log('Error connecting to MongoDB:', err));

// Define Package Model
const PackageSchema = Package


// Add a package dynamically
app.post('/api/packages', async (req, res) => {

  
    try {
      const newPackage = new Package(req.body);
      await newPackage.save();
      res.status(201).json({ message: 'Package added successfully!', package: newPackage });
    } catch (error) {
      console.error('Validation Error:', error);
      res.status(500).json({ message: 'Failed to add package', error });
    }
  });
  

// Fetch all packages
app.get('/api/packages', async (req, res) => {
    try {
        const packages = await Package.find();
        res.status(200).json(packages);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch packages', error });
    }
});

// Add this route to fetch a specific package by title
app.get('/api/packages/:title', async (req, res) => {
    try {
        const title = req.params.title.replace(/-/g, ' '); // Replace hyphens with spaces
        console.log(`Searching for package with title: ${title}`); // Debugging line
        const package = await Package.findOne({ title: title });
        if (!package) {
            return res.status(404).json({ message: 'Package not found' });
        }
        res.status(200).json(package);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch package', error });
    }
});

// Basic route
app.get('/', (req, res) => {
    res.send('Travel Backend is running!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));