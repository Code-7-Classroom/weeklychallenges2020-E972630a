  // Read the file and print its contents.
  const fs = require('fs')
  
  fs.readFile('./medium.txt', 'utf8', function(error, data) {
    if (error) {
    console.log(error);
    }
    console.log(data)
  });