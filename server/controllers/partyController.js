const axios = require('axios');

module.exports = {
    createParty: (req, res) => {
        const db = req.app.get('db');
        const {userID, name, location, gold} = req.body;
        console.log(req.body);

        db.CREATE_PARTY([userID, name, location, gold]).then((result) => {
            console.log(result); //TODO: REMOVE
            res.status(200).send(result);
        }).catch((err) => {
            console.log(`Server error while attempting to create party: ${err}`);
            res.sendStatus(500);
        })
    },

    updateParty: (req, res) => {
        // TODO:
    }
}