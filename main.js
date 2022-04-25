const addBook = document.getElementById('add-books')
const displayBlock = document.querySelectorAll(".hide")
const bookName = document.getElementById('bookName')
const bookUl = document.querySelector('.books-list')
const bookAuthor = document.getElementById('bookAuthor')
const formId = document.getElementById('form')

console.log(bookUl);
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
// console.log(arr);

const bookCollection = JSON.stringify(arr)
localStorage.setItem('books', bookCollection)
})


const bookCollectional = localStorage.getItem('books')
const booksCollection = JSON.parse(bookCollectional)


booksCollection.forEach((book) => {
    let temp = document.createElement('template')
    temp.innerHTML =`
    <li>
    <h2>${book.bookName}</h2>
    <span>${book.bookAuthor}</span>
    <button>Remove</button>
    </li>
    `
    bookUl.appendChild(temp.content)
})

