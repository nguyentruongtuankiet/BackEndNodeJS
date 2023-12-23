async function loadUserPostsUsingAsyncAwait() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        const selectedUser = users[0];
        const userId = selectedUser.id;
        const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        const posts = await postsResponse.json();
        console.log(posts);
    } catch (error) {
        console.error(error.message); // Xử lý lỗi nếu có
    }
}

loadUserPostsUsingAsyncAwait();
