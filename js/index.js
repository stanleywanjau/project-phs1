document.addEventListener('DOMContentLoaded', bookReview)


fetch ('https://www.googleapis.com/books/v1/volumes?q=friction')
.then(res=>res.json)
.then(data=>displayBook(data))

function displayBook(book){
    const booklist=document.querySelector('#book-list')
    const 

}