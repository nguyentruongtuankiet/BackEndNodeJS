# C01 - Dự án Blog

## Mục tiêu

- Rèn luyện tư duy và kỹ năng lập trình với các kiến thức đã được học như: CommonJS, File System
- Có sản phẩm để minh chứng cho năng lực lập trình của bản thân trước nhà tuyển dụng.

## Mô tả

Lập trình một ứng dụng chạy trên Terminal để quản lý các bài viết. Ứng dụng hiện ra menu chức năng cho người dùng lựa chọn. Người dùng có thể thực hiện nhiều chức năng khác nhau một cách lần lượt. Người dùng cũng có thể dừng chương trình sau khi thực hiện xong một chức năng nào đó.

1. Hiển thị danh sách bài viết: Hiển thị các bài viết dưới dạng bảng
2. Thêm một bài viết mới: Cho phép nhập vào thông tin của một bài viết và thêm bài viết ấy vào CSDL
3. Sửa bài viết: Cho phép nhập vào ID của bài viết cần sửa và tiến hành cập nhật bài viết.
4. Xóa bài viết: Cho phép nhập vào ID của bài viết cần xóa. Ứng dụng sẽ xóa bài viết có ID tương ứng.
5. Lọc theo chủ đề: Cho phép chọn chủ đề sẵn có. Ứng dụng sẽ hiển thị các bài viết tương thuộc chủ đề ấy.
6. Sắp xếp theo ngày cập nhật: Ứng dụng có thể sắp xếp tăng dần hoặc giảm dần.
7. Tìm kiếm theo nhiều tiêu chí: Người dùng nhập vào một từ khóa, ứng dụng sẽ hiển thị ra các bài viết liên quan đến từ khóa ấy. Thứ tự bài viết được hiển thị theo trình tự về mức độ trùng khớp của từ khoá ấy.

Chức năng tùy chọn:

1. Thống kê: Ứng dụng có thể đưa ra một vài chỉ số thống kê về danh sách bài viết.
2. Đa ngôn ngữ: Ứng dụng có ngôn ngữ tiếng Việt và tiếng Anh.

## Yêu cầu sản phẩm

- Sản phẩm có thể ít chức năng nhưng phải chất lượng.
- Sản phẩm chất lượng là sản phẩm tốt về giao diện và chức năng:
    - Giao diện đẹp, chỉn chu, tươm tất.
    - Chức năng chạy đúng logic, đáp ứng được nhiều trường hợp, có tốc độ nhanh.
- Mã nguồn được viết chuẩn phong cách lập trình.

## Yêu cầu kỹ thuật

- Sử dụng kỹ thuật lập trình với CommonJS và File System Module
- Chương trình được lập trình theo kỹ thuật lập trình hướng hàm. Các hàm được thiết kế tốt, thể hiện rõ chức năng, input, output của hàm.
- Dữ liệu cần được xác thực.
- Được phép dùng thư viện hay các hàm có sẵn.
- CSDL được lưu trong file JSON
    
    ```json
    {
        "posts": [
          {
            "id": 1,
            "title": "Hướng Dẫn Lập Trình JavaScript Cơ Bản",
            "content": "Nội dung của bài viết về JavaScript cơ bản...",
            "topic": "Lập Trình",
            "author": "Vũ Đình Bảo",
            "date": "2023-01-15"
          },
          {
            "id": 2,
            "title": "Cách Xây Dựng Ứng Dụng Web Với React",
            "content": "Nội dung về xây dựng ứng dụng web bằng React...",
            "topic": "Front-end Development",
            "author": "Nguyễn Phi Khanh",
            "date": "2023-02-10"
          },
          {
            "id": 3,
            "title": "Phân Tích Dữ Liệu Với Python",
            "content": "Nội dung bài viết về phân tích dữ liệu sử dụng Python...",
            "topic": "Data Science",
            "author": "Hoàng Cao Minh",
            "date": "2023-03-20"
          },
          {
            "id": 4,
            "title": "Tạo Ứng Dụng Mobile Với Flutter",
            "content": "Hướng dẫn tạo ứng dụng di động sử dụng Flutter...",
            "topic": "Mobile App Development",
            "author": "Lê Hồng Đức",
            "date": "2023-04-12"
          },
          {
            "id": 5,
            "title": "Cách Thiết Kế Giao Diện Người Dùng Hiệu Quả",
            "content": "Bài viết về thiết kế giao diện người dùng...",
            "topic": "UI/UX Design",
            "author": "Phạm Thị Lan",
            "date": "2023-05-05"
          },
          {
            "id": 6,
            "title": "Lập Trình Game Với Unity",
            "content": "Hướng dẫn lập trình game sử dụng Unity...",
            "topic": "Game Development",
            "author": "Nguyễn Đình Hoàng",
            "date": "2023-06-18"
          },
          {
            "id": 7,
            "title": "Cách Quản Lý Dự Án Phần Mềm",
            "content": "Nội dung về quản lý dự án phần mềm...",
            "topic": "Software Engineering",
            "author": "Trương Văn Bình",
            "date": "2023-07-22"
          },
          {
            "id": 8,
            "title": "Tìm Hiểu Về Trí Tuệ Nhân Tạo",
            "content": "Bài viết về trí tuệ nhân tạo và ứng dụng của nó...",
            "topic": "Artificial Intelligence",
            "author": "Vũ Thị Hương",
            "date": "2023-08-15"
          },
          {
            "id": 9,
            "title": "Kỹ Thuật Lập Trình An Toàn",
            "content": "Hướng dẫn kỹ thuật lập trình an toàn...",
            "topic": "Cybersecurity",
            "author": "Đặng Minh Trí",
            "date": "2023-09-30"
          }
        ]
      }
    ```
    

## Đóng gói và chuyển giao

Sau khi hoàn tất sản phẩm, lập trình viên cần gửi lại các tài liệu sau:

### 1. Source code:

1. Nộp file nén chứa source code và link github (đính kèm trên classroom)
2. Không bao gồm thư mục node_modules

### 2. Báo cáo:

**Phần 1 - Bài làm: Với mỗi câu, bạn cần:**

- Ghi lại đề bài (tóm tắt)
- Source code giải bài đó
- Kết quả: Kết quả khi chạy code.
- Ghi chú: Những ghi chú đi kèm câu này. Ví dụ: Em không chắc chắn lắm câu này; Em chưa hiểu đề câu này; Em có ý tưởng thế này, nhưng em làm bị lỗi thế này; ...

**Phần 2 - Tự nhận xét: Tổng kết thành quả của bạn:**

- Những điều bạn đã làm tốt
- Những điều bạn chưa làm tốt
- Những khó khăn của bạn
