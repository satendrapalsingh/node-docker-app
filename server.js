const express = require('express');

// const PORT = process.env.PORT;
const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';
const app = express();

app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
