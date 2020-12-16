require("dotenv").config();

// Required External Modules
const express = require('express');
const cors = require("cors");
const helmet = require("helmet");
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 8080;
const auth0Config = require("./config/auth0.config");
let db = require("./models");



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(auth(auth0Config));


// ROUTES
require("./routes/api")(app);

app.get('/api/public', function(req, res) {
  res.json({
    message: 'Hello from a public endpoint! You don\'t need to be authenticated to see this.'
  });
});

// This route needs authentication

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


db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});