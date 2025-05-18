
const booksContainer = document.getElementById('books');

async function loadBooks() {
    const res = await fetch('http://localhost:3000/books');
    const books = await res.json();

    booksContainer.innerHTML = '';

    books.forEach(book => {
        const div = document.createElement('div');
        div.classList.add('book');

        div.innerHTML = `
          <img src="http://localhost:3000/${book.image}" alt="${book.title}" />
          <input type="text" value="${book.title}" id="title-${book.id}" />
          <button onclick="updateBook(${book.id})">Update</button>
          <button onclick="deleteBook(${book.id})">Delete</button>
        `;

        booksContainer.appendChild(div);
    });
}


async function searchBook() {
    const id = document.getElementById('searchId').value.trim();
    if (!id) {
        alert('Please enter a Book ID');
        return;
    }

    const res = await fetch(`http://localhost:3000/books/${id}`);

    if (res.ok) {
        const book = await res.json();
        booksContainer.innerHTML = '';

        const div = document.createElement('div');
        div.classList.add('book');
        div.innerHTML = `
          <img src="http://localhost:3000/${book.image}" alt="${book.title}" />
          <input type="text" value="${book.title}" id="title-${book.id}" />
          <button onclick="updateBook(${book.id})">Update</button>
          <button onclick="deleteBook(${book.id})">Delete</button>
        `;
        booksContainer.appendChild(div);

    } else {
        alert('Book not found');
    }
}

async function updateBook(id) {
    const newTitle = document.getElementById(`title-${id}`).value;

    const res = await fetch(`http://localhost:3000/books/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: newTitle })
    });

    if (res.ok) {
        alert('Book updated');
        loadBooks();
    } else {
        alert('Failed to update book');
    }
}

async function deleteBook(id) {
    const res = await fetch(`http://localhost:3000/books/${id}`, {
        method: 'DELETE'
    });

    if (res.ok) {
        alert('Book deleted');
        loadBooks();
    } else {
        alert('Failed to delete book');
    }
}




loadBooks();
