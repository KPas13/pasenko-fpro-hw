let baseUrl = 'https://jsonplaceholder.typicode.com';
let postDiv = document.querySelector('#postDiv');
let commentBtn = document.querySelector('#commentBtn');
let postBtn = document.querySelector('#searchBtn');
let commentDiv = document.querySelector('#commentDiv');


postBtn.addEventListener('click', () => {
    let numOfPost = document.querySelector('#idOfPost').value;
    if(parseInt(numOfPost) <= 100 && parseInt(numOfPost) >= 1) {
        let postUrl = `/posts/${numOfPost}`;
        fetch(baseUrl + postUrl).then(response => response.json()).then(post => {
            postDiv.innerHTML = '';
            let title = document.createElement('h2');
            let postBody = document.createElement('p');
            title.textContent = post.title;
            postBody.textContent = post.body;

            postDiv.appendChild(title);
            postDiv.appendChild(postBody);
        }).catch(error => {
            console.error('Post error: ', error);
            postDiv.textContent = 'Post error';
        });
    } else {
        alert('Enter the right number (1-100)');
    }
});

commentBtn.addEventListener('click', () => {
    let numOfPost = document.querySelector('#idOfPost').value;
    fetch(baseUrl + `/posts/${numOfPost}/comments`)
        .then(response => response.json())
        .then(comments => {
            commentDiv.innerHTML = '';
            comments.forEach(comment => {
                let commentTitle = document.createElement('h2');
                let commentBody = document.createElement('p');
                commentTitle.textContent = comment.name;
                commentBody.textContent = comment.body;
                commentDiv.appendChild(commentTitle);
                commentDiv.appendChild(commentBody);
            });
        })
        .catch(error => {
            console.error('Помилка при отриманні коментарів', error);
            commentDiv.textContent = 'Помилка при отриманні коментарів';
        });
});



