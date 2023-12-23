# ThucHanh_WWW_Buoi7
- Tác Giả: **Nguyễn Trường Tuấn Kiệt**
---
## Nội dung đề bài

Giải các bài tập sau bằng 2 cách:

- Dùng Promise
- Dùng async-await
1. **Bất đồng bộ đơn giản**
    - Yêu cầu: Viết một hàm JavaScript có tham số là một chuỗi str và một số t, trả về một Promise. Nếu str khác rỗng, Promise này sẽ trả về một chuỗi str sau một khoảng thời t giây, ngược lại, nếu str là rỗng, Promise sẽ trả về lỗi. Sau đó, hãy in kết quả của promise.
    - Gợi ý: Sử dụng setTimeout để tạo khoảng thời gian trễ.
2. **Fetch data**
    - Yêu cầu: Viết một hàm sử dụng Promise để thực hiện các tác vụ sau đây:
        - Lấy dữ liệu từ một API: https://jsonplaceholder.typicode.com/users.
        - In dữ liệu lấy được ra màn hình.
        - Xử lý các ngoại lệ có thể xảy ra.
    - Gợi ý: Sử dụng **`fetch`** để tải dữ liệu từ API.
3. **Chuỗi công việc bất đồng bộ**
    - Yêu cầu: Viết một ứng dụng JavaScript quản lý danh sách người dùng và bài viết của họ bằng cách sử dụng Promise chaining. Ứng dụng này cần thực hiện các tác vụ sau đây:
        1. Tải danh sách người dùng từ một API: https://jsonplaceholder.typicode.com/users
        2. Chọn một người dùng từ danh sách.
        3. Tải danh sách bài viết của người dùng đã chọn bằng API: [https://jsonplaceholder.typicode.com/posts?userId=${userId}](https://jsonplaceholder.typicode.com/posts?userId=$%7BuserId%7D)
        4. In danh sách bài viết ra màn hình.
        
        Các bước trên phải được thực hiện bằng cách sử dụng Promise và **`.then()`**. Hãy đảm bảo rằng bạn đã xử lý lỗi (sử dụng **`.catch()`**) trong trường hợp có lỗi xảy ra trong quá trình thực hiện.
        
    - **Gợi ý**: Trong ví dụ này, bạn cần sử dụng **`fetch`** hoặc một thư viện tương tự để tải danh sách người dùng và bài viết từ API. Sử dụng các Promise liên tiếp để thực hiện các bước một và đảm bảo bạn kiểm tra lỗi ở mỗi bước.
4. **Promise all**
    - Yêu cầu: Viết một hàm sử dụng Promise để tải danh sách các URL từ một mảng và sau đó tải nội dung của từng URL. Khi tất cả các URL đã được tải xong, trả về danh sách các nội dung dưới dạng một mảng.
    - URL ví dụ:
        
        ```powershell
        const urlsToFetch = [
          'https://jsonplaceholder.typicode.com/posts/1',
          'https://jsonplaceholder.typicode.com/posts/2',
          'https://jsonplaceholder.typicode.com/posts/3'
        ];
        ```
        
    - Gợi ý: Sử dụng Promise.all để xử lý nhiều Promise đồng thời.
