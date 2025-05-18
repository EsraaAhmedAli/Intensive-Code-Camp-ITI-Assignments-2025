const express = require("express");
const service = require("./booksServices/booksServices.js");
const cors = require('cors');
const app = express();
app.use(express.json());
app.use('/imgs', express.static('imgs'))
app.use(cors());

app.get('/books', (req, res) => {
    res.send(service.getAllBooks());
});

app.get('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const book = service.searchBookById(id);

    if (book) {
        res.send(book);
    } else {
        res.status(400).send({
            message: "object was not found ",
        });
    }
});

app.delete("/books/:id", (req, res) => {
    const id = parseInt(req.params.id);
    service.deleteeBook(id);
    res.send();
});

app.post("/books", (req, res) => {
    const title = req.body.title;
    const image = req.body.image;
    const imageWithPath = image ? `imgs/${image}` : undefined;
    const createBook = service.createBooks(title, imageWithPath);
    res.status(201).send(createBook);
});


app.put('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { title, image } = req.body;

    const updatedImage = image ? `imgs/${image}` : undefined;

    const updatedBook = service.updateBook(id, title, updatedImage);

    if (updatedBook) {
        res.send(updatedBook);
    } else {
        res.status(404).send({ message: "Book not found or update failed" });
    }
});






app.listen(3000, () => {
    console.log("server started at port 3000")
});