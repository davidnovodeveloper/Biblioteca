class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }
}
class Book {
    constructor(title, author, pages, readed) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.readed = readed;
    }
}

const TheHobbit = new Book("The Hobbit", "JRR Tolkien", 219, true);