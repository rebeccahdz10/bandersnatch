CREATE DATABASE questions_db;

USE questions_db;
CREATE TABLE mainDialogue
(
   id INT NOT NULL
   AUTO_INCREMENT,
   question VARCHAR
   (500) NOT NULL,
   option1 VARCHAR (500) NOT NULL,
   option2 VARCHAR (500) NOT NULL,
   PRIMARY KEYs
   (id)
);

CREATE TABLE adventureOne
(
   id INT NOT NULL
   AUTO_INCREMENT,
   question VARCHAR
   (500) NOT NULL,
   option1 VARCHAR (500) NOT NULL,
   option2 VARCHAR (500) NOT NULL,
   PRIMARY KEY
   (id)
);

CREATE TABLE adventureTwo
(
   id INT NOT NULL
   AUTO_INCREMENT,
   question VARCHAR
   (500) NOT NULL,
   option1 VARCHAR (500) NOT NULL,
   option2 VARCHAR (500) NOT NULL,
   PRIMARY KEY
   (id)
);

CREATE TABLE endings (
   id INT NOT NULL
   AUTO_INCREMENT,
   story VARCHAR
   (5000) NOT NULL,
   PRIMARY KEY
   (id)
);