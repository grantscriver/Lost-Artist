### Schema

CREATE DATABASE artistdb;

USE artistdb;

CREATE TABLE states
(
	id int NOT NULL AUTO_INCREMENT,
	state_id varchar(2) NOT NULL,
	state_desc varchar(50) not null,
	PRIMARY KEY (id)
);

CREATE TABLE artists
(
	id int NOT NULL AUTO_INCREMENT,
	artist_name varchar(30) NOT NULL,
	artist_state_ID int not null,
    artist_state varchar(2) not null,
	artist_email varchar(50) not null,
	artist_instagram varchar(50) not null,
	PRIMARY KEY (id),
	foreign key (artist_state_id) references state(id)
);


CREATE TABLE colors
(
	id int NOT NULL AUTO_INCREMENT,
	color_code varchar(3) NOT NULL,
	clr_desc varchar(50) not null,
	PRIMARY KEY (id)
);

CREATE TABLE sizes
(
	id int NOT NULL AUTO_INCREMENT,
	size_code varchar(3) NOT NULL,
	size_desc varchar(50) not null,
	PRIMARY KEY (id)
);

CREATE TABLE categories
(
	id int NOT NULL AUTO_INCREMENT,
	cat_id varchar(15) NOT NULL,
	cat_desc varchar(50) not null,
	PRIMARY KEY (id)
);

CREATE TABLE items
(
	id int NOT NULL AUTO_INCREMENT,
	style varchar(25) NOT NULL,
	style_name varchar(50) NOT NULL,
	item_id varchar(50) NOT NULL,
	cat_id int NOT NULL,
	color_code int NOT NULL,
	size_code int NOT NULL,
	on_hand int NOT NULL,
	artist_name varchar(30) NOT NULL,
	state_id int not null,
	selling_retail int not null,
	about_item varchar(100) not null,
	PRIMARY KEY (id),
	FOREIGN KEY (cat_id) REFERENCES category(id),
	FOREIGN KEY (color_code) REFERENCES color(id),
	FOREIGN KEY (size_code) REFERENCES size(id),
	FOREIGN KEY (state_id) REFERENCES artist(artist_state_id)
);
