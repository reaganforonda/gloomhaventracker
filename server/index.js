const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const massive = require('massive');
const app = express();
const middleware = require('./middlewares/middleware');
const session = require('express-session');
const userController = require('./controllers/userController');
const partyController = require('./controllers/partyController');
const dataController = require('./controllers/dataController');
const characterController = require('./controllers/characterController');

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
});

app.use(middleware.checkSession);

/******** ENDPOINTS ********/
// USER ENDPOINTS
app.post('/api/auth/register', userController.register)
app.get('/api/auth/me', userController.validate)
app.post('/api/auth/login', userController.login);
app.get('/api/auth/logout', userController.logout);

// PARTY ENDPOINTS
app.post('/api/party', partyController.createParty)
app.get('/api/party/:userID', partyController.getAllParties);

// DATA ENDPOINTS
app.get('/api/data/achievements', dataController.getAchievements);
app.get('/api/data/classes', dataController.getClasses);
app.get('/api/data/perks/:classID', dataController.getCharacterPerks);

// CHARACTER ENDPOINTS
app.post('/api/character', characterController.createCharacter);
app.get('/api/characters/:userID', characterController.getAllCharacters);
app.get('/api/character/:characterID', characterController.getSelectedCharacter);
app.put('/api/character/:characterID', characterController.updateCharacter);
app.put('/api/character/goals/:characterID', characterController.updateScenarioGoals)


app.listen(SERVER_PORT, ()=> {
    console.log(`Creeping on: ${SERVER_PORT}`)
})