const myLibrary = [];
// Add a test book
const myBook1 = new Book("Fahrenheit 451", "Ray Bradbury", true, 28);
const myBook2 = new Book("Death on the Nile", "Agatha Christie", true, 108);
myLibrary.push(myBook1);
myLibrary.push(myBook2);
document.addEventListener('DOMContentLoaded', displayBook);

const addBtn = document.querySelector("#add-book-button");
const bookDialog = document.querySelector("#book-dialog");


const cancelBtn = document.querySelector(".close-modal-button");
const submitBtn = document.querySelector(".submit");
const backdrop = document.querySelector("#backdrop")



document.addEventListener('keydown', handleEscapeKey);
const userInputs = bookDialog.querySelectorAll('input');

const bookList = document.querySelector(".book-grid");

addBtn.addEventListener ("click", openModalBox);
submitBtn.addEventListener ("click", addBookToLibrary);
cancelBtn.addEventListener("click", cancelModalBox);



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
  clearInput()
  toggleBackdrop();
}

function handleEscapeKey(event) {
  if (event.key === 'Escape' && bookDialog.open) {
    cancelModalBox();
  }
}

function displayBook() {
  bookList.innerHTML = ''; // Clear existing books
  
  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];
    const bookCard = document.createElement("div");
    bookCard.classList.add('book-card');
    bookCard.dataset.index = i; // Add this line
    bookCard.innerHTML = `
    <div class="book-cover">
    <div class="book-title">
    <h4>${book.title}</h4>
    </div>
      <div class="book-info">
      <h5 id="author-info">✍🏻${book.author}</h5>
    
      <p>📌You are at ${book.numPages} Pages</p>
      
      <div class="switch-button">
        <p>✔️Have you read it?</p>
        <label class="switch">
          <input type="checkbox" ${book.isRead ? 'checked' : ''}>
      </div>
      </div>
   
      <button id="delete-button"></button>    
    </div>
    `;
    
    bookList.appendChild(bookCard);
  }
}

function removeBook(){

}

function addBookToLibrary(event) {
  event.preventDefault();
  const titleValue = userInputs[0].value;
  const authorValue = userInputs[1].value;
  const numPagesValue = parseInt(userInputs[2].value);
  const isReadValue = userInputs[3].checked; 

  if (
    titleValue.trim() === "" ||
    authorValue.trim() === "" ||
    isNaN(numPagesValue) ||
    numPagesValue < 1 
  ){
    alert("Please enter valid values.");
    return;
  }
  
  const newBook = new Book(titleValue, authorValue, isReadValue, numPagesValue);
  
  myLibrary.push(newBook);
  clearInput();
  displayBook();
  bookDialog.close();
  toggleBackdrop();
}



function clearInput() {
  userInputs.forEach(input => {
    if (input.type === 'checkbox') {
      input.checked = false;
    } else {
      input.value = "";
    }
  });
}





function toggleBackdrop() {
  backdrop.classList.toggle("visible");
}

