import Book from '../../modules/Book.js';
import UI from '../../modules/ui.js';
import LocalStore from '../../modules/LocalStore.js';


const listIcon = document.querySelector('.list');
const showForm = document.getElementById('nav-add');
const contactUs = document.getElementById('nav-contact');
const timeInfo = document.querySelector('#date');
const title = document.querySelector('.title-book');
const author = document.querySelector('.author-book');
const addButton = document.querySelector('.add-btn');
const bookDisplay = document.querySelector('.books-display');
const errorMsg = document.querySelector('.error-message');
const mainContainer = document.querySelector('.section');
const formElement = document.querySelector('.add-book-form');
const contact = document.querySelector('.contact-info');



addButton.addEventListener('click', (e) => {
  e.preventDefault();
  const books = LocalStore.storeBooks();
  const newTitle = title.value;
  const newAuthor = author.value;
  let freshId;
  const len = books.length;
  if (len === 0 || len === null) {
    freshId = 0;
  } else {
    freshId = books[len - 1].id + 1;
  }
  const addNewBook = new Book(newTitle, newAuthor, newId);
  if (newTitle.length !== 0 && newAuthor.length !== 0) {
    LocalStore.addBooks(addNewBook);
    UI.addBookToList(addNewBook);
    errorMsg.style.display = 'none';
  } else {
    errorMsg.style.display = 'block';
  }
  formElement.reset();
});

bookDisplay.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.className === 'remove-btn') {
    const { id } = e.target;
    let books = LocalStore.storeBooks();
    books = books.filter((bk) => JSON.stringify(bk.id) !== id);
    localStorage.setItem('local', JSON.stringify(books));
    UI.deleteBookFromList(e.target);
  }
});

document.addEventListener('DOMContentLoaded', UI.showBooks);
listIcon.addEventListener('click', () => {
    mainContainer.style.display = 'block';
  form.style.display = 'none';
  contact.style.display = 'none';
  console.log('clicked')
});

showForm.addEventListener('click', () => {
    mainContainer.style.display = 'none';
  form.style.display = 'block';
  contact.style.display = 'none';
  console.log('clicked')
});

contactUs.addEventListener('click', () => {
    mainContainer.style.display = 'none';
  form.style.display = 'none';
  contact.style.display = 'block';
  console.log('clicked')
});