function loadUserPostsUsingPromise() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            return response.json();
        })
        .then(users => {
            const selectedUser = users[0];
            const userId = selectedUser.id;

            return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        })
        .then(response => {
            return response.json();
        })
        .then(posts => {
            console.log(posts);
        })
        .catch(error => {
            console.error(error.message); 
        });
}

loadUserPostsUsingPromise();
