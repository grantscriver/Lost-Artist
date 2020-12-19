const db = require("../models");
const { checkJwt } = require("../authz/check-jwt");

module.exports = function (app) {
  // Get all Artists from table
  app.get("/api/creators", (req, res) => {
    db.artists.findAll({}).then((dbArtists) => {
      res.send(dbArtists);
    });
  });

  //Get one Artist by ID
  app.get("/api/creators/:email", checkJwt, (req, res) => {
    let emailParam = req.params.email;
    db.artists
      .findOne({
        where: {
          artist_email: emailParam,
        },
      })
      .then((dbArtist) => {
        res.status(200).send(dbArtist);
      });
  });

  //Get all States from States table
  app.get("/api/states", (req, res) => {
    db.states.findAll({}).then((dbStates) => {
      console.log(dbStates);
    });
  });


  //Get all Artists where State = param
  app.get("/api/creators/:state", (req, res) => {
    let stateParam = req.params.state;
    db.artists
      .findAll({
        where: {
          artist_state: stateParam,
        },
      })
      .then((dbArtists) => {
        console.log(dbArtists);
      });
  });

    app.get("/api/public/creator/:id", (req, res) => {
        let idParam = req.params.id;
        db.artists.findOne({
            where: {
                id: idParam
            }
        })
        .then(dbArtist => {
            res.status(200).send(dbArtist);
        });
    });


  //Get all Items from table
  app.get("/api/items", (req, res) => {
    db.items.findAll({}).then((dbItems) => {
      console.log(dbItems);
      res.send(dbItems);
    });
  });

  //Get all Items where color = param
  app.get("/api/items/:color", (req, res) => {
    let colorParam = req.params.color;
    db.items
      .findAll({
        where: {
          color_code: colorParam,
        },
      })
      .then((dbItems) => {
        console.log(dbItems);
      });
  });

  //Get all Items where size = param
  app.get("/api/items/:size", (req, res) => {
    let sizeParam = req.params.size;
    db.items
      .findAll({
        where: {
          size_code: sizeParam,
        },
      })
      .then((dbItems) => {
        console.log(dbItems);
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
        res.send(dbItem);
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
        db.artists.create(req.body)
        .then(dbArtist => {
            console.log(dbArtist);
            res.status(200).send(dbArtist);
        });
    }); 


  //Update Artist
  app.put("/api/creators/:id", (req, res) => {
    let idParam = req.params.id;
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
};
