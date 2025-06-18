const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(express.json());

// In-memory storage for users
const users = new Map();

// POST /users endpoint
app.post('/users', (req, res) => {
    const { name, email } = req.body;

    // Validate input
    if (!name || !email) {
        return res.status(400).json({
            error: 'Missing required fields: name and email are required'
        });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({
            error: 'Invalid email format'
        });
    }

    // Create new user
    const id = uuidv4();
    const user = {
        id,
        name,
        email
    };

    users.set(id, user);
    res.status(201).json(user);
});

// GET /users/:id endpoint
app.get('/users/:id', (req, res) => {
    const { id } = req.params;
    const user = users.get(id);

    if (!user) {
        return res.status(404).json({
            error: 'User not found'
        });
    }

    res.json(user);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});