const express = require('express');
const connectDB = require('./db'); // Adjust the path if needed

const app = express();

// Connect to MongoDB
connectDB();

app.use(express.json());

// Your routes go here

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
