const {Post} = require('../models');

const postData = [
    {
        user_id: 1,
        post_text: 'Check out this nice pie recipie I found!',
        post_title: 'sample title 1'
    },
    {
        user_id: 2,
        post_text: 'Check out this nice pizza recipie I found!',
        post_title: 'sample title 2'
    },
    {
        user_id: 3,
        post_text: 'Check out this nice pot roast recipie I found!',
        post_title: 'sample title 3'
    },
    {
        user_id: 4,
        post_text: 'Check out this nice lasagna recipie I found!',
        post_title: 'sample title 4'
    },
    {
        user_id: 5,
        post_text: 'Check out this nice salmon recipie I found!',
        post_title: 'sample title 5'
    },
    {
        user_id: 5,
        post_text: 'Check out this nice lobster recipie I found!',
        post_title: 'sample title 6'
    }
]


const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;