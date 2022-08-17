const {Post} = require('../models');

const postData = [
    {
        user_id: 1,
        post_text: 'Check out this nice pie recipie I found!'
    },
    {
        user_id: 2,
        post_text: 'Check out this nice pizza recipie I found!'
    },
    {
        user_id: 3,
        post_text: 'Check out this nice pot roast recipie I found!'
    },
    {
        user_id: 4,
        post_text: 'Check out this nice lasagna recipie I found!'
    },
    {
        user_id: 5,
        post_text: 'Check out this nice salmon recipie I found!'
    },
    {
        user_id: 5,
        post_text: 'Check out this nice lobster recipie I found!'
    }
]


const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;