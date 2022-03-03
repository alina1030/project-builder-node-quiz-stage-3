const mongoose = require('mongoose');
const schema = mongoose.Schema(
    {
        A:'String',
        B:'String',
        C:'String'
    }
)

// const Post = mongoose.model('Post',schema);
// module.exports = Post;

const option = mongoose.model('option',schema);
module.exports = option;