CREATE DATABASE tinder;

CREATE TABLE tinder_users (
 user_id SERIAL PRIMARY KEY,
 user_name varchar(255),
 user_photo varchar(255),
 user_date_of_birth integer,
 user_description varchar(255)
);