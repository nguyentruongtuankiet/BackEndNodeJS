

const express = require('express');

const postsController = require('../repositoties/dao');


const router = express.Router();
const app = express();


app.use(express.json());

// app.get('api/v1/posts', (req, res) => {
//     postsController.getAllPosts().then((posts) => {
//         res.status(200).json(posts);
//     }).catch((err) => {
//         res.status(500).json({ error: 'Lỗi khi lấy danh sách sản phẩm' });
//     });
// });


app.get('/api/v1/posts', (req, res) => {
    const numOfBlog = req.query.numOfBlog;
    const isProject = req.query.isProject;
    console.log(numOfBlog);
    console.log(isProject);
    if (Object.keys(req.query).length === 0) {
        postsController.getAllPosts().then((posts) => {
            res.status(200).json(posts);
        }).catch((err) => {
            res.status(500).json({ error: 'Lỗi khi lấy danh sách sản phẩm' });
        });
    } else if (isProject === 'true' || isProject === 'false') {
        postsController.getIsProjectPosts(isProject)
            .then((posts) => {
                res.status(200).json(posts);
            })
            .catch((err) => {
                res.status(500).json({ error: 'Lỗi khi lấy danh sách sản phẩm' });
            });
    } else if (numOfBlog !== undefined) {
        postsController.getLatestPosts(numOfBlog)
            .then((posts) => {
                res.status(200).json(posts);
            })
            .catch((err) => {
                res.status(500).json({ error: 'Lỗi khi lấy danh sách sản phẩm' });
            });
    }
});

app.get('/api/v1/posts/:id', (req, res) => {
    const id = req.params.id;
    postsController.getPostsById(id)
        .then((posts) => {
            res.status(200).json(posts);
        })
        .catch((err) => {
            res.status(500).json({ error: 'Lỗi khi lấy danh sách sản phẩm' });
        });
});


app.listen(3000, () => {
    console.log('Server is running on port 3000.');
});