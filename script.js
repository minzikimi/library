const addBtn = document.querySelector("#add-book-button");
const bookDialog = document.querySelector("#book-dialog");


const cancelBtn = document.querySelector(".close-modal-button");
const submitBtn = document.querySelector(".submit");
const backdrop = document.querySelector("#backdrop")


// Add this event listener to your existing code
document.addEventListener('keydown', handleEscapeKey);
const userInputs = bookDialog.querySelectorAll('input');



addBtn.addEventListener ("click", openModalBox);
submitBtn.addEventListener ("click", addBookToLibrary);
cancelBtn.addEventListener("click", cancelModalBox);


const myLibrary = [];

//create object Book
function Book(title, author, isRead, numPages) {
  this.title = title;
  this.author = author;
  this.isRead = isRead;
  this.numPages = numPages;
}

function openModalBox(){
  bookDialog.showModal();
  toggleBackdrop();
}

function cancelModalBox(){
  bookDialog.close();
  toggleBackdrop();
}

function handleEscapeKey(event) {
  if (event.key === 'Escape' && bookDialog.open) {
    cancelModalBox();
  }
}

function displayBook(){
  const bookList = document.querySelector(".book-grid");
  const bookCard = document.createElement("div")
 
  bookCard.classList.add('book-card');
  document.querySelector(".book-grid").appendChild(bookCard);

  bookCard.innerHTML = `
    <h4>${newBook.titleValue}</h4>
          <p>${newBook.authorValue}</p>
          <p>${newBook.numPagesValue} Pages</p>
          <div class="switch-button">
              <p>Have you read it?</p>
              <label class="switch">
                  <input type="checkbox" ${newBook.isReadValue ? 'checked' : ''}>
                  <span class="slider round" ></span>
              </label>
          </div>
          <button class="delete-button" onclick="deleteBook(this.parentNode)"><i class="bi bi-trash"></i>Delete Book</button>
  `;
}

function addBookToLibrary() {
  event.preventDefault();
  toggleBackdrop();

  const titleValue = userInputs[0].value;
  const authorValue = userInputs[1].value;
  const numPagesValue = parseInt(userInputs[2].value);
  const isReadValue = userInputs[3].checked; 

  if (
    titleValue.trim() === "" ||
    authorValue.trim() === "" ||
    numPagesValue.trim() === "" ||
    isReadValue.trim() === ""
    +numPagesValue < 1 
  ){
    alert("Please enter valid values.");
    return;
  }
  const newBook = new Book(titleValue, authorValue, isReadValue, numPagesValue);

  
  myLibrary.push(newBook);
  console.log(myLibrary);
  
}




function removeBook(){

}

function toggleBackdrop() {
  backdrop.classList.toggle("visible");
}

