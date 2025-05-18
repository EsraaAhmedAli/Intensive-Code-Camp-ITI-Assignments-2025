
const FILE_PATH = "./books.json";
const fileutils = require("../utilis/utilis.js")


const getAllBooks = () =>{
    return fileutils.ReadJson(FILE_PATH);

}

const  createBooks =( bookTitle , imgurl)=>{

    const books = getAllBooks();
    const newid = books[books.length-1].id+1;
    const newbook = {id:newid , title:bookTitle , image: imgurl};
    books.push(newbook);
    console.log(books);
   fileutils.writeJson(FILE_PATH , books);
   return newbook;

};

const  deleteeBook =(bookId )=>{
    const books = getAllBooks();
    const filterbooks = books.filter(({id}) => bookId !== id );
    console.log(filterbooks);
    fileutils.writeJson(FILE_PATH , filterbooks)

};
const updateBook = (bookId, newTitle, imgurl) => {
    const books = getAllBooks();
    let updatedBook = null;

    const updatedBooks = books.map(book => {
        if (book.id === bookId) {
            updatedBook = { 
                ...book, 
                title: newTitle || book.title, 
                image: imgurl || book.image 
            };
            return updatedBook;
        }
        return book;  
    });

    fileutils.writeJson(FILE_PATH, updatedBooks);
    return updatedBook;  // أرجع الكتاب المحدث
};


const searchBookById = (bookId) => {
    const books = getAllBooks();
    const foundBook = books.find(book => book.id === bookId);
    console.log(foundBook);
    return foundBook;
};

module.exports = {
    getAllBooks,
    createBooks,
    deleteeBook,
    updateBook,
    searchBookById,
   
};