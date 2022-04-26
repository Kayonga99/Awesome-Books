const addBook = document.getElementById('add-books')
const displayBlock = document.querySelectorAll(".hide")
const bookName = document.getElementById('bookName')
const bookUl = document.querySelector('.books-list')
const bookAuthor = document.getElementById('bookAuthor')
const formId = document.getElementById('form')
const button = document.getElementById('btn')



// console.log(bookUl);
addBook.addEventListener('click', () => {
    displayBlock.forEach((element) => {
element.style.display = 'flex'
    })
})


const arr = [];


formId.addEventListener('submit', (e) => {
    e.preventDefault()
const books = {
    bookName: bookName.value,
    bookAuthor: bookAuthor.value
}

arr.push(books)

const bookCollection = JSON.stringify(arr)
localStorage.setItem('books', bookCollection)
location.reload()

})


const bookCollectional = localStorage.getItem('books')
const booksCollection = JSON.parse(bookCollectional)


booksCollection.forEach((book) => {
    let temp = document.createElement('template')
    temp.innerHTML =`
    <li>
    <h3>${book.bookName}</h3>
    <h5>${book.bookAuthor}</h5>
    <button id="${book.bookName}" onclick="removeButton('${book}')">Remove</button>
   <hr>
    </li>
    `
    bookUl.appendChild(temp.content)
    
});

<<<<<<< HEAD
   const removeButton = (id) => {
    
   booksCollection.filter((book) => book.id !== parseInt(id, 10));
  
  localStorage.setItem('temp', JSON.stringify(booksCollection));
 
};



removeButton();
=======



>>>>>>> c1950d407915434e5b44d4f85d27a00cb938b371
