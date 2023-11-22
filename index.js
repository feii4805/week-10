// Import the necessary modules
import express from 'express';
import randomCatImg from 'random-cat-img';

// Initialize the express application
const app = express();
const port = 3001; // Use your desired port number

// Define a route that sends a random cat image URL as a response
app.get('/', async (req, res) => {
  try {
    const catImageUrl = await randomCatImg(); // Assuming this is the correct usage
    res.send(`<img src="${catImageUrl}" alt="Random Cat Image">`);
  } catch (error) {
    console.error('Error fetching cat image:', error);
    res.status(500).send('Error fetching cat image');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
