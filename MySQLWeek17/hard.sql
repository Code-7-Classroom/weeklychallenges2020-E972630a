DROP DATABASE IF EXISTS hardChallenge;
CREATE DATABASE hardChallenge;
USE hardChallenge;

CREATE TABLE movieList (
moviesID int AUTO_INCREMENT,
movieTitle VARCHAR(255), 
releaseDate DATE, 
movieRating VARCHAR(255),
PRIMARY KEY(moviesID));

INSERT INTO movieList (movieTitle, releaseDate, movieRating)
VALUES("Ford v Ferrari", "2019-08-30", "PG-13"),
("IT Chapter Two", "2019-09-06", "R"),
("Fast & Furious Presents: Hobbs & Shaw", "2019-08-02", "PG-13"),
("Frozen 2", "2019-11-22", "PG"),
("Call Me By Your Name", "2018-01-19", "R"),
("Little Women", "2019-12-25", "PG"),
("US", "2019-03-22", "R"),
("Avengers:Endgame", "2019-04-26", "PG-13"),
("Onward", "2020-03-06", "PG"),
("Once Upon a Time in Hollywood", "2019-07-26", "R");

-- Write out the queries that would add the director’s First Name and Last Name into two separate columns
ALTER TABLE movieList
ADD (directorFirstName VARCHAR (255), directorLastName VARCHAR(255));

-- MySQL UPDATE 
UPDATE movieList SET directorFirstName = "James", directorLastName = "Mangold" WHERE moviesID = 1;
UPDATE movieList SET directorFirstName = "Andrés", directorLastName = "Muschietti" WHERE moviesID = 2;
UPDATE movieList SET directorFirstName = "David", directorLastName = "Leitch" WHERE moviesID = 3;
UPDATE movieList SET directorFirstName = "Jennifer", directorLastName = "Lee" WHERE moviesID = 4;
UPDATE movieList SET directorFirstName = "Luca", directorLastName = "Guadagnino" WHERE moviesID = 5;
UPDATE movieList SET directorFirstName = "Greta", directorLastName = "Gerwig" WHERE moviesID = 6;
UPDATE movieList SET directorFirstName = "Jordan", directorLastName = "Peele" WHERE moviesID = 7;
UPDATE movieList SET directorFirstName = "Russo", directorLastName = "Brothers" WHERE moviesID = 8;
UPDATE movieList SET directorFirstName = "Dan", directorLastName = "Scanlon" WHERE moviesID = 9;
UPDATE movieList SET directorFirstName = "Quentin", directorLastName = "Tarantino" WHERE moviesID = 10;

-- Create a query that puts the names together
SELECT CONCAT (directorFirstName, ' ', directorLastName) AS directorFullName FROM movieList;

-- Create a query to put the list in alphabetical order by the last name from A-Z 
SELECT * FROM movieList ORDER BY directorLastName ASC;

-- remove the Movies where the Last Name ends with ”R-Z”
DELETE FROM movieList WHERE directorLastName REGEXP '[R-Z]$';

-- Write a query where the first three appear
SELECT * FROM movieList LIMIT 3;

SELECT * FROM movieList;