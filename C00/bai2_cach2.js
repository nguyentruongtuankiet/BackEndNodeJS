async function fetchDataWithAsyncAwait() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error('Lỗi khi lấy dữ liệu từ API');
        }
        const data = await response.json();
        console.log(data); 
    } catch (error) {
        console.error(error.message); 
    }
}


fetchDataWithAsyncAwait();
