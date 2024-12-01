const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
require('dotenv').config();

const app = express();

/
app.use(cors({
  origin: 'https://web-project-2oaz.vercel.app', // Replace with your actual front-end URL
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
  credentials: true, // Allow credentials if needed
}));

app.use(express.json());

const db = new sqlite3.Database('./messages.db', (err) => {
  if (err) {
    console.error('Error opening database:', err);
  } else {
    console.log('Connected to SQLite database');
    db.run(`
      CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        email TEXT,
        message TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )`, (err) => {
        if (err) {
          console.error('Error creating messages table:', err);
        }
      });
  }
});

// Handle preflight requests for CORS
app.options('/api/messages', (req, res) => {
  res.header('Access-Control-Allow-Origin', 'https://web-project-2oaz.vercel.app');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.sendStatus(200);
});

app.post('/api/messages', (req, res) => {
  const { name, email, message } = req.body;

  console.log('Received POST request with body:', req.body); // Add detailed log of request data

  if (!name || !email || !message) {
    console.error('Validation Error: All fields are required');
    return res.status(400).json({ error: 'All fields are required. Please ensure you fill out the name, email, and message fields.' });
  }

  db.run(`INSERT INTO messages (name, email, message) VALUES (?, ?, ?)`, [name, email, message], function (err) {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ error: 'Failed to save the message due to a server issue. Please try again later.' });
    }

    console.log('Message saved successfully with ID:', this.lastID);
    res.status(200).json({ id: this.lastID, message: 'Message saved successfully.' });
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
