
const FILE_PATH = "./books.json";
const fileutils = require("../utilis/utilis.js")


const getAllBooks = () =>{
    return fileutils.ReadJson(FILE_PATH);

}

const  createBooks =(bookId , bookTitle )=>{
    const books = getAllBooks();
    books.push({id:bookId , title:bookTitle});
    console.log(books);
   fileutils.writeJson(FILE_PATH , books)

};

const  deleteeBook =(bookId )=>{
    const books = getAllBooks();
    const filterbooks = books.filter(({id}) => bookId !== id );
    console.log(filterbooks);
    fileutils.writeJson(FILE_PATH , filterbooks)

};

const updateBook = (bookId, newTitle) => {
    const books = getAllBooks();
    const updatedBooks = books.map(book => {
        if (book.id === bookId) {
            return { ...book, title: newTitle };  
        }
        return book;  
    });
    console.log(updatedBooks);
    fileutils.writeJson(FILE_PATH, updatedBooks);
};


const searchBookById = (bookId) => {
    const books = getAllBooks();
    const foundBook = books.find(book => book.id === bookId);
    console.log(foundBook);
    return foundBook;
};


module.exports = {
    getAllBooks ,
    createBooks ,
    deleteeBook ,
    updateBook ,
    searchBookById,


}