DROP DATABASE users_server;
CREATE DATABASE users_server;

\c users_server;

CREATE TABLE users (
  id         SERIAL PRIMARY KEY NOT NULL,
  firstName  VARCHAR(50),
  lastName   VARCHAR(50),
  email      VARCHAR(50) NOT NULL,
  body       VARCHAR(1000)
);