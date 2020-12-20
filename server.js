require("dotenv").config();

// Required External Modules
const express = require('express');
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
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

app.post("/checkout", async (req, res) => {
  console.log("Request: ", req.body);

  let error;
  let status;

  try {
    const { product, token } = req.body;

    const customer = await stripe.customers.create({
        email: token.email,
        source: token.id
    });

    const idempotency_key = uuid();
    const charge = await stripe.charges.create(
      {
        amount: product.price * 100,
        currency: "usd",
        customer: customer.id,
        receipt_email: token.email,
        description: `Purchased the ${product.name}`,
        shipping: {
          name: token.card.name,
          address: {
            line1: token.card.address_line1,
            line2: token.card.address_line2,
            city: token.card.address_city,
            country: token.card.address_country,
            postal_code: token.card.address_zip
          }
        }
      },
      {
        idempotency_key
      }
    );
    console.log("Charge: ", { charge });
    status = "success";
  } catch (err) {
      console.error("Error:", err)
      status = "failure";
  }

  res.json({ error, status });
});

db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});