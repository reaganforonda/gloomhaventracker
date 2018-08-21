DROP TABLE IF EXISTS achievements;
DROP TABLE IF EXISTS parties;
DROP TABLE IF EXISTS locations;
DROP TABLE IF EXISTS users;

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

CREATE TABLE parties
(
    party_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(user_id),
    party_name VARCHAR(45),
    party_location VARCHAR(75),
    party_gold INTEGER,
    achievements TEXT [],
    reputation INTEGER,
    price_mod INTEGER
);