const seedComments = require('./commentSeeds')
const seedUsers = require('./userSeeds')
const seedPosts = require('./postSeeds')

const sequelize = require('../config/connection');

//seed all user data when the function seedAll is called
const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('Now Seeding Users');
    await seedUsers();

    console.log('Now Seeding Posts');
    await seedPosts();

    console.log('Now Seeding Comments');
    await seedComments();

    console.log('Done Seeding!');
};

module.exports = seedAll;