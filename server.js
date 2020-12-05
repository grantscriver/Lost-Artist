const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 8080;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});
app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `Here's your post request: ${req.body.post}`,
  );
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));