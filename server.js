const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/get-form', (req, res) => {
  console.log('GET Form Data:', req.query);
  res.send(`<h1>GET Form Submitted</h1><p>${JSON.stringify(req.query)}</p>`);
});

app.post('/post-form', (req, res) => {
  console.log('POST Form Data:', req.body);
  res.send(`<h1>POST Form Submitted</h1><p>${JSON.stringify(req.body)}</p>`);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
