DROP DATABASE IF EXISTS mediumChallenge;
CREATE DATABASE mediumChallenge;
USE mediumChallenge;

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


SELECT * FROM movieList -- All movies
WHERE movieTitle LIKE "%s%" -- Selects movie titles with "s"
ORDER BY releaseDate ASC; -- Sorts selected movies in ascending order by date