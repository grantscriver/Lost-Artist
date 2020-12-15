const db = require("../models");


module.exports = function(app) {
    
    // Get all Artists from table
    app.get("/api/creators", (req, res) => {
        db.artists.findAll({})
        .then(dbArtists => {
            res.send(dbArtists);
        });
    });

    //Get one Artist by ID
    app.get("/api/creators/:id", (req, res) => {
        let idParam = req.params.id;
        db.artists.findOne({
            where: {
                id: idParam
            }
        })
        .then(dbArtist => {
            console.log(dbArtist);
        });
    });


    //Get all States from States table
    app.get("/api/states", (req, res) => {
        db.states.findAll({})
        .then(dbStates => {
            console.log(dbStates);
        });
    });

    //Get all Artists where State = param
    app.get("/api/creators/:state", (req, res) => {
        let stateParam = req.params.state;
        db.artists.findAll({
            where: {
                artist_state: stateParam
            }
        })
        .then(dbArtists => {
            console.log(dbArtists);
        });
    });

    //Get all Items from table
    app.get("/api/items", (req, res) => {
        db.items.findAll({})
        .then(dbItems => {
            console.log(dbItems);
            res.send(dbItems);
        });
    }); 

    //Get all Items where color = param
    app.get("/api/items/:color", (req, res) => {
        let colorParam = req.params.color;
        db.items.findAll({
            where: {
                color_code: colorParam
            }
        })
        .then(dbItems => {
            console.log(dbItems);
        });
    });
    
    //Get all Items where size = param 
    app.get("/api/items/:size", (req, res) => {
        let sizeParam = req.params.size;
        db.items.findAll({
            where: {
                size_code: sizeParam
            }
        })
        .then(dbItems => {
            console.log(dbItems);
        });
    });

    //Get One Item where id = param
    app.get("/api/items/:id", (req, res) => {
        let idParam = req.params.id;
        db.item.findOne({
            where: {
                id: idParam
            }
        })
        .then(dbItem => {
            console.log(dbItem);
            res.send(dbItem)
        });
    });

    //Create New Artist
    app.post("/api/creators", (req, res) => {
        db.artists.create({
            artist_name: req.body.name,
            artist_state: req.body.state,
            artist_email: req.body.email,
            artist_instagram: req.body.instagram
        })
        .then(dbArtist => {
            console.log(dbArtist);
        });
    }); 

    // Create New Item
    app.post("/api/items", (req, res) => {
        db.items.create({
            style: req.body.style,
            style_name: req.body.style_name,
            item_id: req.body.id,
            cat_id: req.body.cat,
            color_code: req.body.color,
            size_code: req.body.size,
            on_hand: req.body.quantity,
            artist_name: req.body.artist,
            state: req.body.state,
            selling_retail: req.body.price,
            about_item: req.body.description
        })
        .then(dbItem => {
            console.log(dbItem);
        });
    });

    //Update Artist
    app.put("/api/creators/:id", (req, res) => {
        let idParam = req.params.id;
        db.artists.update(
            req.body,
            {
                where: {
                    id: idParam
                }
            }
        )
        .then(dbArtist => {
            console.log(dbArtist);
        });
    });
    
    
    //Update Item 
    app.put("/api/items/:id", (req, res) => {
        let idParam = req.params.id;
        db.items.update(
            req.body,
            {
                where: {
                    id: idParam
                }
            }
        )
        .then(dbItem => {
            console.log(dbItem);
        });
    });

    //Delete Item
    app.delete("/api/items/:id", (req, res) => {
        let idParam = req.params.id;
        db.items.destroy({
            where: {
                id: idParam
            }
        })
        .then(dbItem => {
            console.log(dbItem);
        });
    });

}
