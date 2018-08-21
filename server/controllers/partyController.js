const axios = require('axios');

module.exports = {
    createParty: (req, res) => {
        const db = req.app.get('db');
        const {userID, name, location, gold, reputation, priceMod} = req.body;
        console.log(req.body);

        db.CREATE_PARTY([userID, name, location, gold, reputation, priceMod]).then((result) => {
            console.log(result); //TODO: REMOVE
            res.status(200).send(result);
        }).catch((err) => {
            console.log(`Server error while attempting to create party: ${err}`);
            res.sendStatus(500);
        })
    },

    updateParty: (req, res) => {
        // TODO:
    },

    getAllParties: (req, res) => {
        const db = req.app.get('db');
        const {userID} = req.params;
        
        db.GET_ALL_PARTIES([userID]).then((result) => {
            res.status(200).send(result);
        }).catch((err) => {
            console.log(`Server error while retrieving all parties: ${err}`);
            res.sendStatus(500);
        })
    },
}