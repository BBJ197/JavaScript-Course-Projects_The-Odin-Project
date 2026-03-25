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

document.getElementById("add_form").onclick = function (e) {
    e.preventDefault(); // 🚨 STOP form from reloading page
    titleForm = document.getElementById("Ftitle").value;
    authorForm = document.getElementById("Fautor").value;
    pagesForm = document.getElementById("Fpage").value;
    console.log(titleForm , authorForm, pagesForm);
    addBookToLibrary(titleForm, authorForm, pagesForm)
    addCard();
}
console.log(myLibrary)

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
