function fetchDataWithPromise() {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Lỗi khi lấy dữ liệu từ API');
                }
                return response.json(); 
            })
            .then(data => {
                resolve(data); 
            })
            .catch(error => {
                reject(error); 
            });
    });
}

fetchDataWithPromise()
    .then(data => {
        console.log(data); 
    })
    .catch(error => {
        console.error(error.message); 
    });
