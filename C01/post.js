const fs = require('fs');

let tempData = { posts: [] };

function loadData() {
    try {
        const data = fs.readFileSync('post.json', 'utf8');
        tempData = JSON.parse(data);
    } catch (err) {
        console.error('Lỗi khi đọc tập tin:', err);
    }
}

function saveData() {
    try {
        fs.writeFileSync('post.json', JSON.stringify(tempData), 'utf8');
        console.log('Dữ liệu đã được lưu vào file post.json!');
    } catch (err) {
        console.error('Lỗi khi ghi vào tập tin:', err);
    }
}

function cong(a, b) {
    return a + b;
}

function nghichdao(a) {
    return 1 / a;
}

function readPost() {
    loadData();
    return tempData.posts;
}

function addNewPost(newPost) {
    loadData();
    tempData.posts.push(newPost);
    console.log('Bài viết mới đã được thêm vào CSDL!');
}

function updatePostById(postId, updatedFields) {
    loadData();
    tempData.posts = tempData.posts.map(post => {
        if (post.id === postId) {
            return { ...post, ...updatedFields };
        }
        return post;
    });
    console.log('Bài viết đã được cập nhật!');
}

function deletePostById(postId) {
    loadData();
    tempData.posts = tempData.posts.filter(post => post.id !== postId);
    console.log('Bài viết đã được xóa!');
}

function filterByTopic(topic) {
    loadData();
    const filteredPosts = tempData.posts.filter(post => post.topic.toLowerCase().includes(topic.toLowerCase()));
    if (filteredPosts.length > 0) {
        console.log(`Các bài viết chứa "${topic}":`);
        console.table(filteredPosts);
    } else {
        console.log(`Không có bài viết nào chứa "${topic}".`);
    }
}

function sortByDateOrder(posts, order) {
    try {
        posts.sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return order === 'asc' ? dateA - dateB : dateB - dateA;
        });
        console.log(`Danh sách bài viết đã được sắp xếp ${order === 'asc' ? 'tăng dần' : 'giảm dần'} theo ngày cập nhật:`);
        console.table(posts);
    } catch (err) {
        console.error('Lỗi khi sắp xếp bài viết:', err);
    }
}

function searchByKeyword(keyword) {
    loadData();
    const matchedPosts = tempData.posts.map(post => {
        const { title, content, topic, author } = post;
        const titleMatch = (title.toLowerCase().includes(keyword.toLowerCase())) ? 1 : 0;
        const contentMatch = (content.toLowerCase().includes(keyword.toLowerCase())) ? 1 : 0;
        const topicMatch = (topic.toLowerCase().includes(keyword.toLowerCase())) ? 1 : 0;
        const authorMatch = (author.toLowerCase().includes(keyword.toLowerCase())) ? 1 : 0;

        const matchScore = titleMatch + contentMatch + topicMatch + authorMatch;
        return { ...post, matchScore };
    });
    const sortedPosts = matchedPosts.sort((a, b) => b.matchScore - a.matchScore);
    if (sortedPosts.length > 0) {
        console.log(`Các bài viết liên quan đến từ khóa "${keyword}":`);

        const postsToDisplay = sortedPosts
            .filter(post => post.matchScore > 0)
            .map(({ matchScore, ...rest }) => {
                const { title, content, topic, author, date } = rest;
                return { title, content, topic, author, date };
            });

        console.table(postsToDisplay);
    } else {
        console.log(`Không có bài viết nào liên quan đến từ khóa "${keyword}".`);
    }
}

function statistic() {
    loadData();
    const totalPosts = tempData.posts.length;

    const topics = {};
    tempData.posts.forEach(post => {
        const topic = post.topic;
        topics[topic] = (topics[topic] || 0) + 1;
    });

    const authors = {};
    tempData.posts.forEach(post => {
        const author = post.author;
        authors[author] = (authors[author] || 0) + 1;
    });

    tempData.posts.sort((a, b) => new Date(b.date) - new Date(a.date));
    const newestPost = tempData.posts.length > 0 ? tempData.posts[0] : null;

    console.log('--- Thống kê bài viết ---');
    console.log(`Tổng số bài viết: ${totalPosts}`);
    console.log('Số lượng bài viết theo chủ đề:');
    console.table(topics);
    console.log('Số lượng bài viết theo tác giả:');
    console.table(authors);
    if (newestPost) {
        console.log(`Bài viết mới nhất: "${newestPost.title}" - Ngày: ${newestPost.date}`);
    } else {
        console.log('Không có bài viết nào.');
    }
}

function saveChanges() {
    saveData();
}

module.exports = {
    cong,
    nghichdao,
    readPost,
    addNewPost,
    updatePostById,
    deletePostById,
    filterByTopic,
    sortByDateOrder,
    searchByKeyword,
    statistic,
    saveData,
    saveChanges,
};
