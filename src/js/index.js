const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios');
const cors = require('cors');
app.use(cors());
// Ruta para obtener datos de Pexels
app.get('/', async (req, res) => {
    try {
        const response = await axios.get('https://api.pexels.com/v1/curated?per_page=30', {
          headers: {
            Authorization: 'nJhYrM3NMjdfzgsR092DY9sUSpWiYU2iXmbsAwnDLJHDxxp9F6vKwBnE'
          }
        });
        console.log('Response data:', response.data);
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching data from Pexels API:', error.message);
        res.status(500).send('Error fetching data from Pexels API');
    }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

