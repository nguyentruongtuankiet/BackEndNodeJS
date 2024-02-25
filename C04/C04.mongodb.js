// Kết nối tới hoặc tạo database "blog"
use blog;

// Tạo collection "subscribers"
db.createCollection("subscribers");
// Tạo index cho trường "email" để đảm bảo duy nhất
db.subscribers.createIndex({ "email": 1 }, { unique: true });

// Chèn dữ liệu vào collection "subscribers"
db.subscribers.insertMany([
    { email: "vana@gmail.com" },
    { email: "thib@gmail.com" },
    { email: "vanc@gmail.com" },
    { email: "thid@gmail.com" }
]);

// Tạo collection "posts"
db.createCollection("posts");

// Chèn dữ liệu vào collection "posts" và thêm trường "categories" vào mỗi bài viết
db.posts.insertMany([
    { 
        title: "Giới thiệu về SQL", 
        post_at: ISODate("2024-01-13"), 
        description: "Học cơ bản về SQL", 
        content: "Đây là nội dung của bài viết giới thiệu SQL.", 
        image: "sql_intro.jpg", 
        isProject: true,
        categories: "Công nghệ"
    },
    { 
        title: "Khám phá thế giới", 
        post_at: ISODate("2023-11-14"), 
        description: "Một hành trình qua những địa điểm đẹp", 
        content: "Trong bài viết này, chúng ta sẽ khám phá các điểm đến du lịch đẹp trên khắp thế giới.", 
        image: "travel_destinations.jpg", 
        isProject: false,
        categories: "Du lịch"
    },
    { 
        title: "Các công thức ngon", 
        post_at: ISODate("2023-08-15"), 
        description: "Thử nghiệm các công thức ngon miệng", 
        content: "Khám phá các công thức nấu ăn mới và mẹo nấu ăn trong bài viết này.", 
        image: "delicious_recipes.jpg", 
        isProject: false,
        categories: "Ẩm thực"
    },
    { 
        title: "Mẹo về thể dục", 
        post_at: ISODate("2023-12-16"), 
        description: "Giữ gìn sức khỏe và thể lực", 
        content: "Nhận được những mẹo thể dục quý báu và lời khuyên trong bài viết này.", 
        image: "fitness_tips.jpg", 
        isProject: true,
        categories: "Thể thao"
    }
]);
