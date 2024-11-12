const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./auth');
const gameRoutes = require('./game');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/bubblegame', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Database connected');
})
.catch(err => {
    console.error('Database connection error:', err);
});

// Routes
app.use('/auth', authRoutes);
app.use('/game', gameRoutes);

// Start server
app.listen(1000, () => console.log('Server running on port 1000'));
