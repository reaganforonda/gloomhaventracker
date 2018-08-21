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
        const {userName, pasword} = req.body;

        db.CHECK_USER_NAMES([userName]).then((users)=> {
            if(users.length === 0) {
                res.sendStatus(422);
            } else {
                const userID = users[0].user_id;
                const userPW = users[0].password;
                const confirmedPW = bcrypt.compareSync(password, userPW);

                if(confirmedPW) {
                    req.session.user.user_id = userID;
                    req.session.user.acct_type = 1;
                    res.status(200).send(user[0]);
                } else {
                    res.sendStatus(401);
                }
            }
        }).catch((err) => {
            console.log(`Server error while attempting to login: ${err}`);
            res.sendStatus(500);
        })
    },

    logout: (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    },

    validate: (req, res) => {
        let user = req.session.user;
        if(req.session.user.user_id){
            res.status(200).send(user);
        } else {
            res.sendStatus(401);
        }
    }
}