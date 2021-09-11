
DROP DATABASE  anyvehicle_Project;

CREATE DATABASE anyvehicle_Project;
USE anyvehicle_Project;


Create table roles (
 role_id INT AUTO_INCREMENT NOT NULL,
 role VARCHAR(255) NOT NULL,
 primary key (role_id)
);

CREATE TABLE users(
 id INT AUTO_INCREMENT NOT NULL,
 firstName VARCHAR(255),
 lastName VARCHAR(255),
 email  VARCHAR(255),
 password VARCHAR(255),
 role_id INT,
 is_deleted TINYINT DEFAULT 0,
 FOREIGN KEY (role_id) REFERENCES roles (role_id),
 PRIMARY KEY (id)
);

INSERT INTO roles (role) VALUES("customer");
INSERT INTO roles (role) VALUES("admin");