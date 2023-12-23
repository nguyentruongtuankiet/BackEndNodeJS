let delayString = (str, t) => {
    let p = new Promise((resolve, reject) => {
        if (str !== '') {
            setTimeout(() => {
                resolve(str);
            }, t * 1000);
        } else {
            reject('Chuỗi không được rỗng');
        }
    });

    p
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.error(error);
        });
};

delayString('Hello', 2); // In ra: 'Hello' sau 2 giây
delayString('', 2); // In ra thông báo lỗi nếu chuỗi là rỗng
