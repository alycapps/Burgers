create database burgers_db;
use burgers_db;

create table burgers (
	id int NOT NULL AUTO_INCREMENT,
    burger_name varchar(100) not null,
    devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
