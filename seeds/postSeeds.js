const {Post} = require('../models');

const postData = [
    {
        user_id: 1,
        post_text: 'Samsungs new phone has some amazing capabilities',
        post_title: 'Check out this cool phone I found!'
    },
    {
        user_id: 2,
        post_text: 'Apples new watch has some amazing features',
        post_title: 'Check out this cool watch I found!'
    },
    {
        user_id: 3,
        post_text: "Dell's new computer has some cool add ons",
        post_title: 'Check out this cool computer I found!'
    },
    {
        user_id: 4,
        post_text: 'Spectrs new GPS has some amazing range',
        post_title: 'Check out this cool GPS I found!'
    },
    {
        user_id: 5,
        post_text: 'Reds new camera has rediculous resolution',
        post_title: 'Check out this cool Camera I found!'
    },
    {
        user_id: 5,
        post_text: 'Sonys new microphone has amazing compression',
        post_title: 'Check out this cool microphone I found!'
    }
]


const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;