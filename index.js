const express = require('express');
const app = express();
const PORT = 5000;

// Route: Root welcome message
app.get('/', (req, res) => {
  res.send('Welcome to the Random Image API! Visit /api/image/random to get an image.');
});

// Route: /api/image/random
app.get('/api/image/random', (req, res) => {
  const width = 400;
  const height = 300;
  const imageUrl = `https://picsum.photos/${width}/${height}?random=${Math.floor(Math.random() * 1000)}`;

  res.json({
    image: imageUrl
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
