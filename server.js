require("dotenv").config();

// Required External Modules
const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');

// Required Files
// const auth0Config = require("./config/auth0.config");
const { messagesRouter } = require("./routes/messages/messages.router");
const { clientOrigins } = require("./config/env.dev");
let db = require("./models");
console.log(clientOrigins);
// App/Port
const app=express();
app.use(cors({ origin: "http://localhost:3000" }));
const PORT = process.env.PORT || 8080;
const apiRouter = express.Router();

// use
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(auth(auth0Config));

// ROUTES
require("./routes/api")(app);
app.use("/api", apiRouter);
apiRouter.use("/messages", messagesRouter);




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

// app.get('/profile', requiresAuth(), (req, res) => {
//   res.send(JSON.stringify(req.oidc.user));
// });


db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});