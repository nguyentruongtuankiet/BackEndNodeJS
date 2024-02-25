const express = require('express');
const { Router } = require('express');
const { ObjectId } = require('mongodb'); // Import ObjectId from mongodb
const { Subscribers, Posts } = require('./model');

const router = Router();

router.get('/post', (req, res) => {
    const numOfBlog = req.query.numOfBlog;
    const isProject = req.query.isProject;
    console.log(numOfBlog);
    console.log(isProject);
    if (Object.keys(req.query).length === 0) {
        Posts.find()
            .then((docs) => {
                res.json(docs);
            })
            .catch((error) => {
                res.json({ error: error.message });
            });
    } else if (isProject === 'true' || isProject === 'false') {

        Posts.find({ isProject: isProject })
            .then((docs) => {
                res.json(docs);
            })
            .catch((error) => {
                res.json({ error: error.message });
            });
    } else if (numOfBlog !== undefined) {
        Posts.find().sort({ post_at: 1 }).limit(parseInt(numOfBlog))
            .then((docs) => {
                res.json(docs);
            })
            .catch((error) => {
                res.json({ error: error.message });
            });
    }
});
// api/v1/posts/:id
router.get('/post/:id', (req, res) => {
    const id = req.params.id;
    Posts.findById(id) // Using findById instead of find
        .then((doc) => {
            res.json(doc);
        })
        .catch((error) => {
            res.json({ error: error.message });
        });
});

module.exports = router;
