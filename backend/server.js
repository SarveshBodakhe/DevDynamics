const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());

app.get('/api/data', (req, res) => {
  res.sendFile(__dirname + '/data.json');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
