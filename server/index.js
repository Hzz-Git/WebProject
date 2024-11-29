const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the root directory (where `style.css` and `resources` are located)
app.use(express.static(path.join(__dirname, '.')));

// Route to serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

<<<<<<< HEAD
const port = process.env.PORT || 5000;

=======
const port = process.env.PORT || 3000;
>>>>>>> 40da6543eeb2f1e5af2516769f82df2a8d1e6a0f
app.listen(port, () => console.log(`Server running on port ${port}`));
