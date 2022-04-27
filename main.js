  const title = document.getElementById('title');
  const author = document.getElementById('author');
  const form = document.getElementById('form');
  const bookList = document.getElementById('added-bklist');
  

// Form local storage availability checker function
function isStorageAvailable(type) {
    let storage;
    try {
      storage = window[type];
      const x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return e instanceof DOMException && (
        e.code === 22 || e.code === 1014 || e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') && (storage && storage.length !== 0);
    }
  }
  
  
  let books = [];
  
  if (isStorageAvailable('localStorage')) {
    const data = JSON.parse(localStorage.getItem('bookList'));
    // and if it's not empty, update it
    if (data) {
      books = JSON.parse(localStorage.getItem('bookList'));
    }
  }
  
  const addData = () => {
    const book = {
      id: Math.floor(Math.random() * 1000000),
      title: title.value,
      author: author.value,
    };
    books.push(book);
    if (isStorageAvailable('localStorage')) {
      localStorage.setItem('bookList', JSON.stringify(books));
    }
  };
  const printBooks = () => {
    bookList.innerHTML = '';
    books.forEach((dataFromStorage) => {
      bookList.innerHTML += `<div>
      <h1>${dataFromStorage.title}</h1>
      <h2>${dataFromStorage.author}</h2>
      <button id="${dataFromStorage.title}" onclick="removeButton('${dataFromStorage.id}')">Remove</button>
      <hr>
      </div>`;
    });
  };
  
  const removeButton = (id) => {
    books = books.filter((book) => book.id !== parseInt(id, 10));
  
    localStorage.setItem('bookList', JSON.stringify(books));
    printBooks();
  };
  
  form.onsubmit = () => {
    addData();
    printBooks();
    form.reset();
  };
  
  printBooks();
  removeButton();