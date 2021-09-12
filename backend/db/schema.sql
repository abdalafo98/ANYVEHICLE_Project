
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

CREATE TABLE maintenances (
    id INT AUTO_INCREMENT NOT NULL,
    phone_number VARCHAR(13) NOT NULL,
    vehicle_type VARCHAR(255) NOT NULL,
    make VARCHAR(255) NOT NULL,
    year  VARCHAR(255) NOT NULL,
    vehicle_id VARCHAR(255) NOT NULL, 
    problem  TEXT NOT NULL,
    date_of_service DATE NOT NULL,
    order_status ENUM("accepted","pending","dismissed") DEFAULT "pending" NOT NULL,
    user_id INT ,
    FOREIGN KEY (user_id) references users (id),
    primary key (id)
);

INSERT INTO roles (role) VALUES("customer");
INSERT INTO roles (role) VALUES("admin");