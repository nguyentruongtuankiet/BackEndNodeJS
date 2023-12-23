const urlsToFetch = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3'
];
async function fetchDataFromUrlsAsync(urls) {
    try {
        const promises = urls.map(async url => {
            const response = await fetch(url);
            return response.json();
        });

        const results = await Promise.all(promises);
        return results;
    } catch (error) {
        throw new Error(`Lỗi khi xử lý các URL: ${error.message}`);
    }
}


fetchDataFromUrlsAsync(urlsToFetch)
    .then(data => {
        console.log(data); 
    })
    .catch(error => {
        console.error(error.message); 
    });
