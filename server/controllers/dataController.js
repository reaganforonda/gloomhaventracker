
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
}