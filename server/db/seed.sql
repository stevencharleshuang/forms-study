\c users_server

DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
         id SERIAL PRIMARY KEY NOT NULL,
  firstName VARCHAR(50),
   lastName VARCHAR(50),
      email VARCHAR(50) NOT NULL,
       body VARCHAR(1000)
);

INSERT INTO users (firstName, lastName, email, body)
     VALUES ('John', 'Doe', 'john.doe@email.com', 'Hello World!'),
            ('Jane', 'Doe', 'jane.doe@email.com', 'Hello World!'),
            ('John', 'Smith', 'john.smith@email.com', 'Hello World!'),
            ('Jane', 'Smith', 'jane.smith@email.com', 'Hello World!'),
            ('Joe', 'Shmo', 'joe.shmo@email.com', 'Hello World!');