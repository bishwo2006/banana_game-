const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Import routes
const bananaRoutes = require('./routes/bananaRoutes');
app.use('/api/banana', bananaRoutes);

app.get('/', (req, res) => {
  res.send('Banana Quiz App API is running!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});