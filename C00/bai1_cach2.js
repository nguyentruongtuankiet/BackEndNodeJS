async function delayStringAsync(str, t) {
    try {
        let customPromise = new Promise((resolve, reject) => {
            if (str !== '') {
                setTimeout(() => {
                    resolve(str);
                }, t * 1000);
            } else {
                reject(new Error('Chuỗi không được rỗng'));
            }
        });

        let result = await customPromise; 

        console.log(result); 
    } catch (error) {
        console.error(error.message); 
    }
}

delayStringAsync('Hello', 2);
delayStringAsync('', 2);
