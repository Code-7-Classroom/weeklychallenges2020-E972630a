DROP DATABASE IF EXISTS veryHardChallenge;
CREATE DATABASE veryHardChallenge;
USE veryHardChallenge;

CREATE TABLE carList (
CarID int AUTO_INCREMENT,
carMake varchar(255), 
carModel varchar(255), 
carYear int (30),
 PRIMARY KEY(CarID));
 
INSERT INTO carList (carMake, carModel, carYear)
VALUES("Hyundai", "Sonota", 2019),
("Audi", "TT", 2020 ),
("Alfa Romeo", "Giulia", 2020),
("Jeep", "Grand Cherokee", 2020),
("Mercedes-Benz", "A-Class", 2020);

-- Write a query to add in three cars at once
INSERT INTO carList (carMake, carModel, carYear)
VALUES ("Tesla", "Model X", 2020),
("Toyota", "Camry", 2020),
("Lexus", "RX", 2020);

-- Write a query to add in prices and colors for each of these cars
ALTER TABLE carList
ADD (carPrice INT (255), carColor VARCHAR(255));

-- MySQL UPDATE 
UPDATE carList SET carPrice = 22650, carColor = "Lakeside Blue" WHERE CarID = 1;
UPDATE carList SET carPrice = 45500, carColor = "Nardo Gray" WHERE CarID = 2;
UPDATE carList SET carPrice = 39400, carColor = "Alfa Black" WHERE CarID = 3;
UPDATE carList SET carPrice = 32150, carColor = "Diamond Black" WHERE CarID = 4;
UPDATE carList SET carPrice = 32800, carColor = "Denim Blue Metallic" WHERE CarID = 5;
UPDATE carList SET carPrice = 84990, carColor = "Solid Black" WHERE CarID = 6;
UPDATE carList SET carPrice = 24425, carColor = "Galactic Aqua Mica" WHERE CarID = 7;
UPDATE carList SET carPrice = 44150, carColor = "Obsidian" WHERE CarID = 8;

-- Write a query to put the Make and Model together in one column
SELECT CONCAT (carMake, ' ', carModel) AS cars FROM carList;

-- Create a new query that adds an additional column to the results to show how many cars have the same Make.
SELECT carMake, COUNT(1) FROM carList GROUP BY carMake;

 SELECT * FROM carList;