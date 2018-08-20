DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS achievements;

CREATE TABLE users
(
    user_id SERIAL PRIMARY KEY,
    user_name VARCHAR(45),
    email VARCHAR(80),
    password VARCHAR(100)
);

CREATE TABLE achievements
(
    achievement_id SERIAL PRIMARY KEY,
    achievement_name VARCHAR(45)
);

CREATE TABLE locations
(
    location_id SERIAL PRIMARY KEY,
    location_name VARCHAR(45),
    map_location VARCHAR(45)
);