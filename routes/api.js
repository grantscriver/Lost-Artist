const db = require("../models");
const { checkJwt } = require("../authz/check-jwt");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const { v4: uuidv4 } = require('uuid');

module.exports = function (app) {
  // Get all Artists from table
  // app.get("/api/creators", (req, res) => {
  //   db.artists.findAll({}).then((dbArtists) => {
  //     res.send(dbArtists);
  //   });
  // });

  //Get one Artist by ID
  app.get("/api/private/creators/:email", checkJwt, (req, res) => {
    let emailParam = req.params.email;
    db.artists
      .findOne({
        where: {
          artist_email: emailParam,
        },
      })
      .then((dbArtist) => {
        // res.status(200).send(dbArtist);
        res.json(dbArtist);
      });
  });

  //Get all States from States table
  app.get("/api/states", (req, res) => {
    db.states.findAll({}).then((dbStates) => {
      console.log(dbStates);
    });
  });

  //Get all Artists where State = param
  app.get("/api/creators", (req, res) => {
    // let stateParam = req.params.id;
    console.log(req.query);
    db.artists
      .findAll({
        where: req.query,
      })
      .then((dbArtists) => {
        console.log(dbArtists);
        res.json(dbArtists);
        // res.status(200).send(dbArtists);
      });
  });

  app.get("/api/public/creator/:id", (req, res) => {
    let idParam = req.params.id;
    db.artists
      .findOne({
        where: {
          id: idParam,
        },
      })
      .then((dbArtist) => {
        // res.status(200).send(dbArtist);
        res.json(dbArtist)
      });
  });

  //Get all Items from table
  app.get("/api/items", (req, res) => {
    db.items
      .findAll({
        where: req.query,
      })
      .then((dbItems) => {
        console.log(dbItems);
        // res.send(dbItems);
        res.json(dbItems);
      });
  });

  //Get One Item where id = param
  app.get("/api/items/:id", (req, res) => {
    let idParam = req.params.id;
    db.item
      .findOne({
        where: {
          id: idParam,
        },
      })
      .then((dbItem) => {
        console.log(dbItem);
        // res.send(dbItem);
        res.json(dbItem);
      });
  });

  //Create New Artist
  app.post("/api/creators", (req, res) => {
    db.artists.create(req.body.data).then((dbArtist) => {
      console.log(dbArtist);
      res.status(200).send(dbArtist);
    });
  });

  // Create New Item
  app.post("/api/items", (req, res) => {
    db.items
      .create({
        style_name: req.body.style_name,
        category: req.body.category,
        color: req.body.color,
        small_qty: req.body.small_qty,
        med_qty: req.body.med_qty,
        large_qty: req.body.large_qty,
        state_id: req.body.state_id,
        price: req.body.price,
        description: req.body.description,
        image: req.body.image,
        artistId: req.body.artistId,
      })
      .then((dbItem) => {
        console.log(dbItem);
      });
  });

  //Create New Artist
  app.post("/api/create/creators", (req, res) => {
    console.log("😒");
    console.log(req.body);
    db.artists.create(req.body).then((dbArtist) => {
      console.log(dbArtist);
      res.status(200).send(dbArtist);
    });
  });

  //Update Artist
  app.put("/api/edit/creators/:id", (req, res) => {
    let idParam = req.params.id;
    console.log(req.body);
    db.artists
      .update(req.body, {
        where: {
          id: idParam,
        },
      })
      .then((dbArtist) => {
        console.log(dbArtist);
      });
  });

  //Update Item
  app.put("/api/items/:id", (req, res) => {
    let idParam = req.params.id;
    db.items
      .update(req.body, {
        where: {
          id: idParam,
        },
      })
      .then((dbItem) => {
        console.log(dbItem);
      });
  });

  //Delete Item
  app.delete("/api/items/:id", (req, res) => {
    let idParam = req.params.id;
    db.items
      .destroy({
        where: {
          id: idParam,
        },
      })
      .then((dbItem) => {
        console.log(dbItem);
      });
  });

  // Stripe API

  app.get("/cart", (req, res) => {
    res.send("Add your Stripe Secret Key to the .require('stripe') statement!");
  });

  app.post("/checkout", async (req, res) => {
    console.log("Request: ", req.body);

    let error;
    let status;

    try {
      const { cart, total, token } = req.body;

      const customer = await stripe.customers.create({
        email: token.email,
        source: token.id,
      });

      const idempotencyKey = uuidv4();
      const charge = await stripe.charges.create(
        {
          amount: total * 100,
          currency: "usd",
          customer: customer.id,
          receipt_email: token.email,
          description: `Purchased the ${cart.style_name}`,
          shipping: {
            name: token.card.name,
            address: {
              line1: token.card.address_line1,
              line2: token.card.address_line2,
              city: token.card.address_city,
              country: token.card.address_country,
              postal_code: token.card.address_zip,
            },
          },
        },
        {
          idempotencyKey,
        }
      );
      console.log("Charge: ", { charge });
      status = "success";
    } catch (err) {
      console.error("Error:", err);
      status = "failure";
    }

    res.json({ error, status });
  })
};
