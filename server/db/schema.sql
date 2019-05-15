DROP DATABASE forms_server;
CREATE DATABASE forms_server;

\c forms_server;

CREATE TABLE forms (
  id         SERIAL PRIMARY KEY NOT NULL,
  firstName  VARCHAR(50),
  lastName   VARCHAR(50),
  email      VARCHAR(50) NOT NULL,
  body       VARCHAR(1000)
);