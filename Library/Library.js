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

function addCard() {
    const container = document.getElementsByClassName("cards")[0];
    for (let i=0; i<myLibrary.length; i++){
        container.insertAdjacentHTML("beforeend", `
            <div class="card">
                <div>
                    <div class="title">${myLibrary[i].title}</div><br>
                    <div class="content">
                    <b>By:</b> ${myLibrary[i].author} <br>
                    <b>Page:</b> ${myLibrary[i].pages}<br>
                    <b>Id:</b> ${myLibrary[i].id}         
                    </div>
                </div>
                <div class="icons">
                    <span class="mdi mdi-star-plus-outline"></span>
                    <span class="mdi mdi-eye-plus-outline"></span>
                    <span class="mdi mdi-transit-connection-variant"></span>
                </div>
            </div>
        `);
    }
}

addCard();
