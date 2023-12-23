const urlsToFetch = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3'
];

function fetchDataFromUrls(urls) {
    const promises = urls.map(url =>
        fetch(url)
            .then(response => {
                return response.json();
            })
            .catch(error => {
                throw new Error(`Lỗi khi xử lý URL: ${url}, ${error.message}`);
            })
    );

    return Promise.all(promises)
        .then(results => {
            return results;
        })
        .catch(error => {
            throw new Error(`Lỗi khi xử lý các URL: ${error.message}`);
        });
}

fetchDataFromUrls(urlsToFetch)
    .then(data => {
        console.log(data); 
    })
    .catch(error => {
        console.error(error.message); // Xử lý lỗi nếu có
    });
