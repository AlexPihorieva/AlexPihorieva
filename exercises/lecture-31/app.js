const url = "https://my-json-server.typicode.com/AlexPihorieva/AlexPihorieva/posts";
const usersUrl = "https://jsonplaceholder.typicode.com/users"

const template = (item) => `
<h3>${item.title}</h3>
<div>${item.content}</div>
<p>Author: <strong><span class="author" data-id="${item.authorId}"></stan></strong></p>
`;

const xhrPromise = (method, url) => {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.send();
  
    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response);
      } else {
        resolve(xhr.response);
      }
    };

    xhr.onerror = () => {
      reject('Something went wrong!');
    };   
  });

  return promise;
};

xhrPromise("GET", url)
.then(response => {
    const posts = JSON.parse(response)
	
    let result = ''
    posts.forEach(item => {
        result += template(item)
    })
    document.getElementById("blog").innerHTML = result;
    
    return posts
})
.then(posts => {

    const uniqueAuthorIds = [...new Set(posts.map(post => post.authorId))];

    uniqueAuthorIds.forEach(authorId => {
        console.log(authorId + 'create promise')
        const promise = new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open("GET", usersUrl + '/' + authorId);
            xhr.send();
          
            xhr.onload = () => {
              if (xhr.status >= 400) {
                reject(xhr.response);
              } else {
                resolve(xhr.response);
              }
            };
        
            xhr.onerror = () => {
              reject('Something went wrong!');
            };   
          });

        promise.then(response => {
            const user = JSON.parse(response);
            document.querySelectorAll('.author[data-id="' + user.id + '"]').forEach(item => {
                item.textContent = user.name
            })
        })
        
    })


    
    
})
