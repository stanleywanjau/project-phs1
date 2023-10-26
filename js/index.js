document.addEventListener('DOMContentLoaded', () => {
    const bookReview = document.getElementById('book-review');
    const booklist = document.getElementById('book-list');
  
    fetch('https://www.googleapis.com/books/v1/volumes?q=friction')
      .then((res) => res.json())
      .then((data) => {
        data.items.forEach((book) => {
          const bookInfo = book.volumeInfo;
          const bookItem = document.createElement('div');
          bookItem.classList.add('book');
          bookItem.innerHTML = `
            <h2>${bookInfo.title}</h2>
            <img src="${bookInfo.imageLinks.thumbnail}" alt="book Cover">
            <p><strong>AUTHOR:</strong>${bookInfo.authors}</p>
            <p><strong>publisher:</strong>${bookInfo.publisher}</p>
            <p><strong>publishedDate</strong>${bookInfo.publishedDate}</p>
            <p><strong>description</strong>${bookInfo.description}</p>
            <button class="like-button">Like</button>
            <p class="likeCount">0</p>
            <div class="comments">
              <!-- Existing comments will be displayed here -->
            </div>
            <form class="commentForm">
              <textarea class="commentText" placeholder="Write your comment..."></textarea>
              <button type="submit">Post Comment</button>
            </form>
          `;
  
          const bookListItem = document.createElement('li');
          bookListItem.classList.add('book');
          bookListItem.innerHTML = `
            <h5>${bookInfo.title}</h5>
          `;
  
          bookReview.appendChild(bookItem);
          booklist.appendChild(bookListItem);
        });
        
        // Function to handle the click event of the like button
        function like(event) {
          let likeCount = parseInt(event.target.nextElementSibling.textContent);
          likeCount += 1;
          event.target.nextElementSibling.textContent = likeCount;
        }
  
        // Add an event listener for the like button
        const likeButtons = document.querySelectorAll('.like-button');
        likeButtons.forEach((button) => {
          button.addEventListener('click', like);
        });
  
   
        });
  
       
       
  });
  