function showPost() {
    new Promise(getPostId)
        .then(getPost)
        .catch((error) => {
            alert(error);
        })
    function getPostId(resolve, reject) {
        let postId = +prompt('Введіть номер бажаного поста, від 1 до 100');
        if (postId < 0 || postId > 100 || postId === 0 || !Number.isInteger(postId)) {
            reject('Приймаються тількі цілі числа від 1 до 100');
        } else {
            resolve(postId);
        }
    }
    function getPost(postId) {
        const promisePost = fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
            method: 'GET'
        })
        promisePost
            .then(response => response.json())
            .then(data => {
                const post = document.createElement('div');
                post.insertAdjacentHTML('beforeend', `<h3>${data.title}</h3>` + data.body + '<br></br><button class="js--cmnts-btn" type="button">Показати коментарі</button>');
                const cmntsBtn = post.querySelector('.js--cmnts-btn');
                cmntsBtn.addEventListener('click', function() {
                    cmntsBtn.disabled = true;
                    const promiseCmnts = fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`, {
                        method: 'GET'
                    })
                    promiseCmnts
                        .then(responseCmnts => responseCmnts.json())
                        .then(dataCmnts => {
                            comments = document.createElement('article');
                            dataCmnts.forEach(comment => {
                                comments.insertAdjacentHTML('beforeend', `<div><br><b>Ім'я:</b> ${comment.name} <br><b>Пошта:</b> ${comment.email} <br><b>Коментар:</b> ${comment.body}</div>`);
                            });
                            post.appendChild(comments);
                        })
                        .catch((error) => {
                            console.log(error);
                        })
                })
                document.body.appendChild(post);
            })
            .catch((error) => {
                console.log(error);
            })
    }
}
document.querySelector('.js--post').addEventListener('click', () => showPost());
