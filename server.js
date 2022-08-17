const path = require('path');
const express = require('express');
const sequelize = require('./config/connection.js');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const exphbs = require('express-handlebars');
const helpers = require('./util/helpers.js');
const hbs = exphbs.create({helpers});
const routes = require('./controllers');
const seedAll = require('./seeds');


//create session variable
const sess = {
    secret: 'Super Secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db:sequelize
    })
}

//create app and initialize variables
const app = express();
const PORT = process.env.PORT || 3001;

//create view engine for handlebars npm
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session(sess));
app.use(routes);

sequelize.sync({force: true}).then(() => {
    app.listen(PORT, () => console.log('Now Listening'));
    //seedAll();
})