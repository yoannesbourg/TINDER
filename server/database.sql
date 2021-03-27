CREATE DATABASE tinder;

CREATE TABLE users (
 id SERIAL PRIMARY KEY,
 name varchar(255) NOT NULL,
 photo varchar(255) NOT NULL,
 birthdate integer NOT NULL,
 description varchar(255) NOT NULL
);