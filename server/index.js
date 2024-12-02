// server/index.js
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors({
  origin: 'https://web-project-2oaz.vercel.app',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json());

// PostgreSQL connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

// Create messages table if it doesn't exist
pool.query(`
  CREATE TABLE IF NOT EXISTS messages (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
  )
`, (err) => {
  if (err) {
    console.error('Error creating table:', err);
  } else {
    console.log('Table created or already exists');
  }
});

// Message endpoint
app.post('/api/messages', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO messages (name, email, message) VALUES ($1, $2, $3) RETURNING *',
      [name, email, message]
    );

    res.json({
      success: true,
      message: 'Message sent successfully',
      data: result.rows[0]
    });
  } catch (error) {
    console.error('Error saving message:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to save message'
    });
  }
});

app.get('/api/test', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ success: true, time: result.rows[0].now });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

