DROP DATABASE messages_server;
CREATE DATABASE messages_server;

\c messages_server;

CREATE TABLE messages (
  id         SERIAL PRIMARY KEY NOT NULL,
  firstName  VARCHAR(50),
  lastName   VARCHAR(50),
  email      VARCHAR(50) NOT NULL,
  body       VARCHAR(1000)
);