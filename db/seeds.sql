INSERT INTO states (state_id, state_desc) VALUES ('MN','Minnesota');

insert into artists (artist_name, artist_state_id, artist_state, artist_email, artist_instagram) 
values ('Jared Harms', '1', 'MN', 'jaren@hotmail.com','@Jaredharms');

insert into categories (cat_id, cat_desc) values ('1','HATS');

insert into colors (color_code, clr_desc) values ('RD','Red');

insert into sizes (size_code, size_desc) values ('M','Medium');

insert into items (style, style_name, item_id, cat_id, color_code, size_code, on_hand, artist_name, state_id, selling_retail, about_item, artistId, categoryId, colorId, sizeId)
values ('Snapback', 'Snapback Hat', '12345', '1', '1', '1', '4', 'Jared Harms', '1', '35', 'Handmade using recycled fabrics.', '1', '1', '1', '1');