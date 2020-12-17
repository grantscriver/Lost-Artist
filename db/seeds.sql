use artistdb;

INSERT INTO states (state_abbr, state_desc)
VALUES("IA", "Iowa"),
("MN", "Minnesota"),
("MI", "Michigan"),
("ND", "North Dakota"),
("SD", "South Dakota"),
("WI", "Wisconsin");


INSERT INTO artists (artist_name, artist_email, artist_instagram, stateId)
VALUES ("Mal Ludwig", "mal_ludwig4@email.com", "@ludiwgmal", 3),
("Joe Johnson", "joeyjohnson@email.com", "@joesclothes", 1),
("Monica Haverford", "haverford_m@email.com", "@stylehaverford", 2);



INSERT INTO items (style_name, category, color, size, on_hand, state_abbr, price, description, artistId)
VALUES ("Henley", "Shirt", "White", "Medium", 4, "MN", "20", "Medium white henley.", 3),
("Never Again Graphic", "Shirt", "Black", "Small",  1, "MN", "15", "Small Never Again Black Graphic Shirt", 2),
("Knit", "Hoodie", "Green", "Large", 5,  "MI", "25", "Knit Green Hoodie", 1);