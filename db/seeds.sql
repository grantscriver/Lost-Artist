INSERT INTO state (state_id, state_desc) VALUES ('MN','Minnesota');

insert into artist (artist_name, artist_state_id, artist_state, artist_email, artist_instagram) 
values ('Jared Harms', '1', 'MN', 'jaren@hotmail.com','@Jaredharms');

insert into category (cat_id, cat_desc) values ('HATS','HATS');

insert into color (color_code, clr_desc) values ('RD','Red');

insert into size (size_code, size_desc) values ('M','Medium');

insert into item (style, style_name, item_id, cat_id, color_code, size_code, on_hand, artist_name, state_ID, selling_retail, about_item)
values ('STRAW HATS', 'Check straw hat','12345','1','1','1','4','Jared Harms','1','35.00','hand woven using the straw from my farm');
