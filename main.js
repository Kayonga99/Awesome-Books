const addBook = document.getElementById('add-books')
const displayBlock = document.querySelectorAll(".hide")

addBook.addEventListener('click', () => {
    displayBlock.forEach((element) => {
element.style.display = 'flex'
    })
})