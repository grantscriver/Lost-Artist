require("dotenv").config();

// Required External Modules
const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require('uuid');
const bodyParser = require("body-parser");

// Required Files
// const auth0Config = require("./config/auth0.config");
const { messagesRouter } = require("./routes/messages/messages.router");
const { clientOrigins } = require("./config/env.dev");
let db = require("./models");
console.log(clientOrigins);
// App/Port
const app = express();
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

db.sequelize.sync({ force: false }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});
