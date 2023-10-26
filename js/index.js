document.addEventListener('DOMContentLoaded', ()=>{
const bookReview = document.getElementById('book-review')
const booklist = document.getElementById("book-list")

fetch ('https://www.googleapis.com/books/v1/volumes?q=friction')
.then(res=>res.json())
.then(data=>data.items.forEach(book=> {
    //create where to get the book information
    const bookInfo = book.volumeInfo;
    const bookItem =document.createElement('div') 
    bookItem.classList.add('book');
    bookItem.innerHTML=`
    <h2>${bookInfo.title}</h2>
    <img src="${bookInfo.imageLinks.thumbnail}" alt="book Cover">
    <p><strong>AUTHOR:</strong>${bookInfo.authors}</p>
    <p><strong>publisher:</strong>${bookInfo.publisher}</p>
    <p><strong>publishedDate</strong>${bookInfo.publishedDate}</p>
    <p><strong>description</strong>${bookInfo.description}</p>
    
   
    
    `;
// create list of books
    const bookListItem = document.createElement("li")
    bookListItem.classList.add('book')
    bookListItem.innerHTML=`
    <h5>${bookInfo.title}</h5>
    `
    bookReview.appendChild(bookItem);
    booklist.appendChild(bookListItem);


function search_book(bookInfo){
let input = document.getElementById('searchbar').value 
    input=input.toLowerCase(); 
    let x = document.getElementById("book-list"); 
      
    for (i = 0; i < x.length; i++) {  
        if (!x[i].innerHTML.toLowerCase().includes(input)) { 
            x[i].style.display="none"; 
        } 
        else { 
            x[i].style.display="book-item";                  
        } 
        return search
    } 
}
    
})
)

    

    }
    
    

)