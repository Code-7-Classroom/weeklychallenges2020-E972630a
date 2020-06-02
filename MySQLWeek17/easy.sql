DROP DATABASE IF EXISTS easychallenge;
CREATE DATABASE easychallenge;
USE easychallenge;

CREATE TABLE bookList (
bookID int AUTO_INCREMENT,
bookTitle VARCHAR(255), 
publishDate DATE, 
authorFullName  VARCHAR(255),
PRIMARY KEY(bookID));
 
INSERT INTO bookList (bookTitle, publishDate, authorFullName)
VALUES("Nineteen Eighty-Four", "1949-06-08", "George Orwell"),
("Ulysses", "1922-02-02", "James Joyce"),
("Catch-22", "1961-11-10", "Joseph Heller"),
("Don Quixote", "1605-01-01", "Miguel de Cervantes"),
("War and Peace", "1867-01-01", " Leo Tolstoy");

-- Add two more books
INSERT INTO bookList (bookTitle, publishDate, authorFullName)
VALUES ("Les Misérables", "1862-01-01", "Victor Hugo"),
("Of Mice and Men", "1937-11-23", "John Steinbeck");

-- Remove Oldest Book
DELETE FROM bookList ORDER BY publishDate LIMIT 1;

SELECT * FROM bookList;
 
 -- Sum of All Books
-- SELECT COUNT(bookTitle) FROM bookList;