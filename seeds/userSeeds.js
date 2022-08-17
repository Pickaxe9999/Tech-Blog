const {User} = require('../models');

const userData = [
    {
        username: 'Jacob_H',
        email: 'sampleemail@gmail.com',
        password: 'password'
    },
    {
        username: 'Josh_b',
        email: 'sampleemail5@gmail.com',
        password: 'passwordw'
    },
    {
        username: 'Cody_C',
        email: 'sampleemail9@gmail.com',
        password: 'passwordx'
    },
    {
        username: 'Rachael_D',
        email: 'sampleemail4@gmail.com',
        password: 'passwordq'
    },
    {
        username: 'Dave_B',
        email: 'sampleemail1@gmail.com',
        password: 'passwordj'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;