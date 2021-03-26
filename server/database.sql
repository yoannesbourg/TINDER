CREATE DATABASE tinder;

CREATE TABLE tinder_users (
 user_id SERIAL PRIMARY KEY,
 user_name varchar,
 user_photo varchar,
 user_date_of_birth integer,
 user_description varchar
);