const mongoose = require('mongoose');

const { Schema } = mongoose;
const dbURI = 'mongodb+srv://TuanKiet:Kiet271002@cluster0.o582t.mongodb.net/blog?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(dbURI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Connection failed:', error);
    });



const CategoriesSchema = new Schema({
    name: { type: String, required: true, unique: true }
}, { versionKey: false });

const SubscribersSchema = new Schema({
    email: { type: String, required: true, unique: true }
}, { versionKey: false });

// { 
//     title: "Các công thức ngon", 
//     post_at: ISODate("2024-01-15"), 
//     description: "Thử nghiệm các công thức ngon miệng", 
//     content: "Khám phá các công thức nấu ăn mới và mẹo nấu ăn trong bài viết này.", 
//     image: "delicious_recipes.jpg", 
//     isProject: false,
//     categories: "Ẩm thực"
// },
const PostsSchema = new Schema({
    title: { type: String, required: true },
    post_at: { type: Date, required: true },
    description: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String, required: true },
    isProject: { type: Boolean, required: true },
    categories: { type: String, required: true }
}, { versionKey: false });




const Subscribers = mongoose.model('Subscribers', SubscribersSchema);

const Posts = mongoose.model('Posts', PostsSchema);


module.exports = { Subscribers, Posts };
