const bcrypt = require('bcryptjs');
const axios = require('axios');


module.exports = {
    register : async (req, rest)=> {
        const db = app.app.get('db');

        const {
            userName,
            email,
            pw
        } = req.body;
    }
}