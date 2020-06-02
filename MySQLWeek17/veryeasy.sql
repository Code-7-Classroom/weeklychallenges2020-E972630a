DROP DATABASE IF EXISTS veryEasyChallenge;
CREATE DATABASE veryEasyChallenge;
USE veryEasyChallenge;

CREATE TABLE carList (
CarID int AUTO_INCREMENT,
carMake varchar(255), 
carModel varchar(255), 
carYear int (30),
 PRIMARY KEY(CarID));
 
INSERT INTO carList (carMake, carModel, carYear)
VALUES("Hyundai", "Sonota", 2019),
("Audi", "TT", 2020 ),
("Alfa Romeo", "Giulia", 2020);

-- Add two more cars
INSERT INTO carList (carMake, carModel, carYear)
VALUE ("Jeep", "Grand Cherokee", 2020),
("Mercedes-Benz", "A-Class", 2020);

SELECT * FROM carList;