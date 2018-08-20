const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const massive = require('massive');
const app = express();
const session = require('express-session')

const {
    SERVER_PORT,
    CONNECTION_STRING,
    SECRET_SESSION,
} = process.env;

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(`${__dirname}/../build`));

app.use(
    session({
        secret: SECRET_SESSION,
        resave: false,
        saveUninitialized: true
    })
)

massive(CONNECTION_STRING).then((dbInstance) => {
    app.set('db', dbInstance);
})

/******** ENDPOINTS ********/

app.listen(SERVER_PORT, ()=> {
    console.log(`Creeping on: ${SERVER_PORT}`)
})