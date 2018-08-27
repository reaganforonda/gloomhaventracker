
module.exports = {
    getAchievements : (req, res) => {
        const db = req.app.get('db');
        
        db.GET_ACHIEVS().then((result) => {
            res.status(200).send(result);
        }).catch((err) => {
            console.log(`Server error while attempting to retrieve achievement: ${err}`)
            res.sendStatus(500);
        })
    },

    getClasses : (req, res) => {
        const db = req.app.get('db');

        db.GET_CLASSES().then((result) => {
            res.status(200).send(result);
        }).catch((err) => {
            console.log(`Server error while attempting to retrieve classes: ${err}`)
            res.sendStatus(500);
        })
    },

    getCharacterPerks: (req, res) => {
        const db = req.app.get('db');

        db.GET_CLASS_PERKS([]).then((result) => {
            res.status(200).send(result)
        }).catch((err) => {
            console.log(`Server error while attempting to retrieve perks: ${err}`);
            res.sendStatus(500);
        })
    },
}