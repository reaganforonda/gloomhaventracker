const axios = require('axios');
const bcrypt = require('bcryptjs');

module.exports = {
    register : async (req, res) => {
        const db = req.app.get('db');
        const {userName, email, password, confirmPassword} = req.body;
        console.log(req.body);

        if(password !== confirmPassword){
            console.log("Password do not match")
            res.sendStatus(400);
        }

        await db.CHECK_EMAILS([email]).then((emails) => {
            if(emails.length !== 0){
                res.sendStatus(409);
            } else {
                const salt = bcrypt.genSaltSync(10);
                const hash = bcrypt.hashSync(confirmPassword, salt);

                db.CREATE_USER([userName, email, hash]).then((result) => {
                    console.log(result);
                    res.status(200).send(result);
                }).catch((err) => {
                    console.log(`Server Error while attempting to register user: ${err}`);
                    res.sendStatus(500);
                })
            }
        })
    },

    login: (req, res) => {
        const db = req.app.get('db');
        const {userName, pasword, confirmPassword} = req.body;
    }
}