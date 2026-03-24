const myLibrary = [];

function Book(newObj){
    myLibrary.push(newObj);
}

function addBookToLibrary(title1, author1, pages1) {
    const obj1 = {
        id: crypto.randomUUID(),
        title: title1,
        author: author1,
        pages: pages1 
    }
    Book(obj1);
}

addBookToLibrary("feker", "shems", 77)
addBookToLibrary("bsb", "uwb9", 97)
console.log(myLibrary);
