process.loadEnvFile();
const booksPath = process.env.booksFilePath;
console.log(booksPath);
const booksServices = require("./booksServices/booksServices.js");
booksServices.createBooks(4 , "mybook");
console.log( "Before" ,  booksServices.getAllBooks());
// booksServices.deleteeBook(2);
console.log( "After " ,   booksServices.getAllBooks());
booksServices.updateBook("1", "New Title");
booksServices.searchBookById(1);


