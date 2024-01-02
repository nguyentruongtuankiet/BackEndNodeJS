const readlineSync = require('readline-sync');
const postController = require("./post");

function displayMenu() {
    console.log("1. Cộng");
    console.log("2. Nghịch đảo");
    console.log("3. Hiển thị dữ liệu bài viết");
    console.log("4. Thêm bài viết mới");
    console.log("5. Cập nhật bài viết");
    console.log("6. Xóa bài viết");
    console.log("7. Lọc bài viết theo chủ đề");
    console.log("8. Sắp xếp bài viết");
    console.log("9. Lọc bài viết theo từ khóa");
    console.log("10. Thống kê");
    console.log("11. Lưu vào hệ thống");
}

function main() {
    while (true) {
        displayMenu();
        console.log("-------------------------------");
        const choice = Number(readlineSync.question("Chon chuc nang: "));
        switch (choice) {
            case 1:
                const num1 = Number(readlineSync.question("Nhap so thu nhat: "));
                const num2 = Number(readlineSync.question("Nhap so thu hai: "));
                const result = postController.cong(num1, num2);
                console.log("Ket qua: " + result);
               
                break;
            case 2:
                const numToInverse = Number(readlineSync.question("Nhap so can nghich dao: "));
                const inverseResult = postController.nghichdao(numToInverse);
                console.log("Ket qua: " + inverseResult);
               
                break;
            case 3:
                console.table(postController.readPost());
             
                break;
            case 4:
                const currentPosts = postController.readPost();
                const newPost = {
                    id: currentPosts.length > 0 ? currentPosts.length + 1 : 0,
                    title: readlineSync.question("Nhap tieu de bai viet: "),
                    content: readlineSync.question("Nhap noi dung bai viet: "),
                    topic: readlineSync.question("Nhap chu de: "),
                    author: readlineSync.question("Nhap tac gia: "),
                    date: new Date().toISOString().split('T')[0],
                };
                postController.addNewPost(newPost);
             
                break;
            case 5:
                const posts = postController.readPost();
                const postIdToUpdate = Number(readlineSync.question('Nhap ID cua bai viet can sua: '));
                const selectedPost = posts.find(post => post.id === postIdToUpdate);
                if (!selectedPost) {
                    console.log('Không tìm thấy bài viết có ID đã nhập.');
                } else {
                    const updatedFields = {
                        title: readlineSync.question('Nhap tieu de moi: '),
                        content: readlineSync.question('Nhap noi dung moi: '),
                        topic: readlineSync.question('Nhap chu de mơi: '),
                        author: readlineSync.question('Nhap tac gia moi: '),
                        date: new Date().toISOString().split('T')[0],
                    };
                    postController.updatePostById(postIdToUpdate, updatedFields);
                }
             
                break;
            case 6:
                const postIdToDelete = Number(readlineSync.question('Nhap ID cua bai viet can xoa: '));
                postController.deletePostById(postIdToDelete);
             
                break;
            case 7:
                const selectedTopic = readlineSync.question('Nhap chu de can loc: ');
                postController.filterByTopic(selectedTopic);
             
                break;
            case 8:
                console.log("Nhập 1 để sắp xếp theo ngày tăng dần.");
                console.log("Nhập 2 để sắp xếp theo ngày giảm dần.");
                const sortChoice = Number(readlineSync.question('Nhap 1 hoac 2: '));
                const postsToSort = postController.readPost();
                if (sortChoice === 1) {
                    postController.sortByDateOrder(postsToSort, 'asc');
                } else if (sortChoice === 2) {
                    postController.sortByDateOrder(postsToSort, 'desc');
                }
          
                break;
            case 9:
                const keyword = readlineSync.question('Nhap tu khoa can tim kiem: ');
                postController.searchByKeyword(keyword);
             
                break;
            case 10:
                postController.statistic();
          
                break;
            case 11:
                postController.saveChanges();

                break;
            default:
                console.log("Chức năng không hợp lệ!");
                break;
        }
    }
}

main();
