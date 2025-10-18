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
        this.id = crypto.randomUUID();
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.readed = readed;
    }
}

const library = new Library();
const container = document.querySelector("#container");
const button = document.querySelector("#submit");
const bname = document.querySelector("#name");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");

button.addEventListener("click", function(event) {
    event.preventDefault();
    const readed = document.querySelector('input[name="readed"]:checked');
    let book = new Book(bname.value, author.value, pages.value, readed.value);
    library.addBook(book);
    const div = document.createElement("div");
    const text = document.createElement("p");
    const del = document.createElement("button");

    div.id = book.id;
    div.className = "book";
    del.className = "del";
    del.textContent = "borrar";
    text.textContent = bname.value;

    div.appendChild(text);
    div.appendChild(del);
    container.appendChild(div);

    del.addEventListener("click", function(e) {
        e.stopPropagation();
        const divParent = del.parentElement;
        divParent.remove();
    });

    div.addEventListener("click", function() {
        const info = document.createElement("div");
        info.className = "info";
        const close = document.createElement("button");
        close.textContent = "Cerrar";
        close.style.borderRadius = "20px";
        close.addEventListener ("click", function() {
            const parentDiv = close.parentElement;
            parentDiv.remove();

        });
        const title = document.createElement("h2");
        const author = document.createElement("h3");
        const pages = document.createElement("h4");
        const readed = document.createElement("h4");
        title.textContent = book.title;
        author.textContent = book.author;
        pages.textContent = `Pages: ${book.pages}`;
        if (book.readed == true) {
            readed.textContent = "I read this book";
        }
        else {
            readed.textContent = "I haven't readed this book";
        }
        info.append(close, title, author, pages, readed);
        container.append(info);

    });
})