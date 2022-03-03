const mongoose = require('mongoose');
const schema = mongoose.Schema(
    {
        answer: 'String'
    }
)

// const Post = mongoose.model('Post',schema);
// module.exports = Post;

const answer = mongoose.model('answer',schema);
module.exports = answer;