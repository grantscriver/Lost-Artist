use artistdb;

INSERT INTO states (state_abbr, state_desc)
VALUES("IA", "Iowa"),
("MN", "Minnesota"),
("MI", "Michigan"),
("ND", "North Dakota"),
("SD", "South Dakota"),
("WI", "Wisconsin");


INSERT INTO artists (artist_name, artist_email, artist_instagram, artist_city, artist_about, stateId)
VALUES ("Mal Ludwig", "mal_ludwig4@email.com", "@ludiwgmal", "Battle Creek", "Hi, my name is Mal and I love creating unique designs!", 3),
("Joe Johnson", "joeyjohnson@email.com", "@joesclothes", "Des Moines", "I'm Joe. Be sure to check out my instagram to see all my upcoming pieces for my collection.", 1),
("Monica Haverford", "haverford_m@email.com", "@stylehaverford", "Alexandria", "All my designs are lake themed.", 2),
("Calvin Freese", "calvin.freese@hotmail.com", "@whacking_mufn", "Minneapolis", "Help wanted, apply within.", 2);


INSERT INTO items (style_name, category, color, state_abbr, price, description, artistId)
VALUES ("Henley", "Shirt", "White",  "MN", "20", "Medium white henley.", 3),
("Never Again Graphic", "Shirt", "Black", "MN", "15", "Small Never Again Black Graphic Shirt", 2),
("Knit", "Hoodie", "Green", "MI", "25", "Knit Green Hoodie", 1);