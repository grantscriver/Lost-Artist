require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const { auth, requiresAuth } = require('express-openid-connect');
const PORT = process.env.PORT || 8080;
const auth0Config = require("./config/auth0.config");
const jwt = require('express-jwt');
const jwtAuthz = require('express-jwt-authz');
const jwksRsa = require('jwks-rsa');
const checkScopes = jwtAuthz([ 'read:messages' ]);
let db = require("./models");



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(auth(auth0Config));


// Authorization middleware. When used, the
// Access Token must exist and be verified against
// the Auth0 JSON Web Key Set
const checkJwt = jwt({
  // Dynamically provide a signing key
  // based on the kid in the header and 
  // the signing keys provided by the JWKS endpoint.
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `${process.env.AUTH0_ISSUER}.well-known/jwks.json`
  }),

  // Validate the audience and the issuer.
  audience: process.env.AUTH0_AUDIENCE,
  issuer: process.env.AUTH0_ISSUER,
  algorithms: ['RS256']
});



// ROUTES
require("./routes/api")(app);

app.get('/api/public', function(req, res) {
  res.json({
    message: 'Hello from a public endpoint! You don\'t need to be authenticated to see this.'
  });
});

// This route needs authentication
app.get('/api/private', checkJwt, function(req, res) {
  res.json({
    message: 'Hello from a private endpoint! You need to be authenticated to see this.'
  });
});


app.get('/api/private-scoped', checkJwt, checkScopes, function(req, res) {
  res.json({
    message: 'Hello from a private endpoint! You need to be authenticated and have a scope of read:messages to see this.'
  });
});

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