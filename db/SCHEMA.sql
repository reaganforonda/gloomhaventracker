DROP TABLE IF EXISTS users

CREATE TABLE users
(
    user_ID SERIAL PRIMARY KEY,
    auth_ID text,
    user_name VARCHAR(45),
    picture TEXT
)