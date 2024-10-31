const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the root directory (where `style.css` and `resources` are located)
app.use(express.static(path.join(__dirname, '.')));

// Route to serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
