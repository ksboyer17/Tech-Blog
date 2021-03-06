const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const controllers = require("./controller/index");



const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

//identify the user 
const sess = {
    secret: 'Hello',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
  };
  
  app.use(session(sess));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(controllers);


app.listen(PORT, () => console.log('Now listening'));