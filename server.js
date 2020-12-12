const express = require('express');
const bodyParser = require('body-parser');
// const cors = require('cors');
const app = express();
const { auth } = require('express-openid-connect');
const PORT = process.env.PORT || 8080;
const auth0Config = require("./config/auth0.config");



const { requiresAuth } = require('express-openid-connect');


// app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(auth(auth0Config));


app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out')
});

app.get('/api/log', (req, res)=> {
  console.log("hello :)")
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out')

});

app.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));