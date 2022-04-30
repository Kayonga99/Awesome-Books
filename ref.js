class BookLists {
  constructor() {
    this.bkList = JSON.parse(localStorage.getItem('library')) || [];
  }

  displayBooks() {
    const bookTable = document.getElementById('tb-body');
    let table = '';
    this.bkList.forEach((book, i) => {
      table += `
      <tr>
        <th scope="row">${i + 1}</th>  
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td><span id="${book.id}" onClick="remove(${book.id
})" class="btn btn-danger btn-sm delete">X</span></td>
      </tr>`;
    });
    bookTable.innerHTML = table;
  }

  addBook(title, author) {
    const book = {
      id: this.bkList.length + 1,
      title,
      author,
    };

    this.bkList = [...this.bkList, book];
    localStorage.setItem('library', JSON.stringify(this.bkList));
  }

  removeBook(index) {
    this.bkList = this.bkList.filter((b) => b.id !== index);
    localStorage.setItem('library', JSON.stringify(this.bkList));
    this.displayBooks();
  }
}

const bkList = new BookLists();
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const addInput = document.querySelector('#button');

bkList.displayBooks();

// eslint-disable-next-line no-unused-vars
function remove(index) {
    //eslint-disable-line
  bkList.removeBook(index);
}

addInput.addEventListener('click', (e) => {
  e.preventDefault();
  if (titleInput.value && authorInput.value) {
    bkList.addBook(titleInput.value, authorInput.value);
    bkList.displayBooks();
    titleInput.value = '';
    authorInput.value = '';
  }
});

// website with navigation

const addButton = document.querySelector(".new-book")
const see = document.querySelector(".list-")
const contact = document.querySelector(".contact-us")
const addNewBook = document.getElementById('form')
const wiewList = document.querySelector(".tablesid")
const viewContact = document.querySelector(".contact")


addButton.addEventListener('click', () => {
  addNewBook.style.display = 'block'
})

see.addEventListener('click', () => {
  wiewList.classList.remove('tablesid')
})

contact.addEventListener('click', () => {
  viewContact.style.display = 'block'
})
