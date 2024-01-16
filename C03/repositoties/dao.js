const con = require('../dbs/connect');

async function getAllPosts() {
    try {
        await con.connect();

        const query = "SELECT * FROM posts";

        const result = await con.promise().query(query);
        return result[0];

    } catch (err) {
        console.error(err);
    } finally {
        // await con.end();
    }
}

async function getLatestPosts(recent) {
    try {
        await con.connect();

        const query = "SELECT * FROM posts ORDER BY post_at DESC LIMIT ?";

        const result = await con.promise().query(query, [Number(recent)]);
        return result[0];

    } catch (err) {
        console.error(err);
    } finally {
        // await con.end();
    }
}

async function getIsProjectPosts(bool) {
    try {
        await con.connect();
        if (bool === 'true') bool = 1;
        if (bool === 'false') bool = 0;
        const query = "SELECT * FROM posts where isProject = ?";
        const result = await con.promise().query(query, [bool]);
        return result[0];

    } catch (err) {
        console.error(err);
    } finally {
        // await con.end();
    }
}

async function getPostsById(id) {
    try {
        await con.connect();
        const query = "SELECT * FROM posts WHERE id = ?";
        const result = await con.promise().query(query, [id]);
        return result[0];

    } catch (err) {
        console.error(err);
    } finally {
        // await con.end();
    }
}

module.exports = {
    getAllPosts,
    getLatestPosts,
    getIsProjectPosts,
    getPostsById
}
