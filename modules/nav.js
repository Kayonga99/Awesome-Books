// navigation
const addButton = document.querySelector('.new-book');
const see = document.querySelector('.list-');
const contact = document.querySelector('.contact-us');
const addNewBook = document.getElementById('form');
const wiewList = document.querySelector('.tablesid');
const viewContact = document.querySelector('.contact');

addButton.addEventListener('click', () => {
  addNewBook.style.display = 'block';
  viewContact.style.display = 'none';
  wiewList.style.display = 'none';
});

see.addEventListener('click', () => {
  wiewList.classList.remove('tablesid');
  addNewBook.style.display = 'none';
  viewContact.style.display = 'none';
  wiewList.style.display = 'table';
});

contact.addEventListener('click', () => {
  viewContact.style.display = 'block';
  addNewBook.style.display = 'none';
  wiewList.style.display = 'none';
});