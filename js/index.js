document.addEventListener('DOMContentLoaded', () => {
    const bookReview = document.getElementById('book-review');
    const booklist = document.getElementById('book-list');
  // fetch data from googleapis
    fetch('https://www.googleapis.com/books/v1/volumes?q=react')
      .then((res) => res.json())
      .then((data) => {
        data.items.forEach((book) => {
          const bookDetails = book.volumeInfo;
          const bookItem = document.createElement('div');
          bookItem.classList.add('book');
          //book details will be displayed here
          bookItem.innerHTML = `
            <h2>${bookDetails.title}</h2>
            <img src="${bookDetails.imageLinks.thumbnail}" alt="book Cover">
            <p><strong>AUTHOR:</strong>${bookDetails.authors}</p>
            <p><strong>publisher:</strong>${bookDetails.publisher}</p>
            <p><strong>publishedDate:</strong>${bookDetails.publishedDate}</p>
            <p><strong>description:</strong>${bookDetails.description}</p>
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
  // book list
          const bookListItem = document.createElement('li');
          bookListItem.classList.add('book');
          bookListItem.innerHTML = `
            <h5>${bookDetails.title}</h5>
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
  
        // Event listener for the comment form
        const commentForms = document.querySelectorAll('.commentForm');
        commentForms.forEach((form) => {
          form.addEventListener('submit', function (event) {
            event.preventDefault();
  
            const commentText = form.querySelector('.commentText').value;
            if (commentText.trim() !== '') {
              const commentDiv = document.createElement('div');
              commentDiv.className = 'comment';
              commentDiv.textContent = commentText;
  
              form.parentElement.querySelector('.comments').appendChild(commentDiv);
  
              form.querySelector('.commentText').value = '';
            }
          });
        });
  
        // Function to search for books
        function searchBooks() {
          let input = document.getElementById('searchbar').value.toLowerCase();
          let bookItems = document.querySelectorAll('.book');
  
          bookItems.forEach((item) => {
            if (!item.innerHTML.toLowerCase().includes(input)) {
              item.style.display = 'none';
            } else {
              item.style.display = 'block';
            }
          });
        }
  
        // Event listener for the search bar
        const searchBar = document.getElementById('searchbar');
        searchBar.addEventListener('input', searchBooks);
      });
  });
  