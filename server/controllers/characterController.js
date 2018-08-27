const axios = require('axios');

module.exports = {
    createCharacter: (req, res) => {
        const db = req.app.get('db');

        const {userID, characterName, characterClass} = req.body;

        db.CREATE_NEW_CHARACTER([userID, characterClass, characterName]).then((result) => {
            res.status(200).send(result);
        }).catch((err) => {
            console.log(`Server error while attempting to create new character: ${err}`);
            res.sendStatus(500);
        })
    },

    getAllCharacters: (req, res) => {
        const db = req.app.get('db');

        const {userID} = req.params;

        db.GET_ALL_CHARACTERS([userID]).then((result) => {
            res.status(200).send(result);
        }).catch((err) => {
            console.log(`Server error while attempting to retrieve all characters: ${err}`);
            res.sendStatus(500);
        });
    },

    getSelectedCharacter: (req, res) =>{
        const db = req.app.get('db');

        const {characterID} = req.params;

        db.GET_SELECT_CHARACTER([characterID]).then((result) => {
            res.status(200).send(result);
        }).catch((err)=> {
            console.log(`Server error while attempting to retrieve selected character: ${err}`);
            res.sendStatus(500);
        })
    },

    updateCharacter: (req, res) => {
        const db = req.app.get('db');
        const {characterID} = req.params;
        const {characterName, level, exp, gold} = req.body;

        db.UPDATE_CHARACTER([characterID,characterName, level, exp, gold]).then((result) => {
            res.status(200).send(result);
        }).catch((err) => {
            console.log(`Server error while attempting to update character: ${err}`);
            res.sendStatus(500);
        })
    }
}