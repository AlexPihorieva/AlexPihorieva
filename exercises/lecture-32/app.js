
const url = "https://jsonplaceholder.typicode.com/posts";

const template = (item) => `
<h3>${item.title}</h3>
<div>${item.body}</div>
<p>Author: <strong><span class="author" data-id="${item.userId}"></stan></strong></p>
`;


fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json()
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    })
    .then(posts => {
        let result = ''
        posts.forEach(item => {
            result += template(item)
        })
        document.getElementById("blog").innerHTML = result;
    })
    .then(() => {
        const users = document.querySelectorAll('.author');
        users.forEach(user => {
            fetch(`https://jsonplaceholder.typicode.com/users/${user.dataset.id}`)
                .then(response => response.json())
                .then(_user => {
                    console.log(_user.name)
                    user.textContent = _user.name
                })
        })
    })


