const myLibrary = [];

function Book(newObj){
    myLibrary.push(newObj);
}

function addBookToLibrary(title1, author1, pages1, done1) {
    const obj1 = {
        id: crypto.randomUUID(),
        title: title1,
        author: author1,
        pages: pages1,
        done: done1  

    }
    Book(obj1);
}

const dialog = document.getElementById("new_book")

function show_dialog(){
    dialog.showModal()
}

dialog.addEventListener("click", (e)=>{
    if (e.target === dialog) {
        dialog.close();
    }
})

let titleForm;
let authorForm;
let pagesForm;
let readForm;

document.getElementById("add_form").onclick = function (e) {
    e.preventDefault(); // 🚨 STOP form from reloading page
    titleForm = document.getElementById("Ftitle").value;
    authorForm = document.getElementById("Fautor").value;
    pagesForm = document.getElementById("Fpage").value;
    readForm = document.querySelector('input[name="read"]:checked').value;
    addBookToLibrary(titleForm, authorForm, pagesForm, readForm)
    addCard();
}

function addCard() {
    const container = document.getElementsByClassName("cards")[0];
    container.innerHTML = "";
    for (let i=0; i<myLibrary.length; i++){
        container.insertAdjacentHTML("beforeend", `
            <div class="card">
                <div>
                    <div class="title">${myLibrary[i].title}</div><br>
                    <div class="content">
                    <b>By:</b> ${myLibrary[i].author} <br>
                    <b>Page:</b> ${myLibrary[i].pages}<br>
                    <b>Id:</b> ${myLibrary[i].id}<br>     
                    <b>read this book:</b> ${myLibrary[i].done}
                    </div>
                </div>
                <div class="icons">
                    <button class="remove_btn" data-id="${myLibrary[i].id}">Remove</button>
                    <button class="Change_stat" data-id="${myLibrary[i].id}">Change Status</button>
                </div>
            </div>
        `);
    }
}

const container = document.getElementsByClassName("cards")[0];

container.addEventListener("click", function(e) {
    if (e.target.classList.contains("remove_btn")) {
        const id = e.target.dataset.id;

        const index = myLibrary.findIndex(book => book.id === id);
        if (index !== -1) {
            myLibrary.splice(index, 1);
        }

        addCard();
    }
});

console.log(document.getElementById("Fread").value);