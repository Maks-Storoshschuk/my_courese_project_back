module.exports = {
    getDrinkers: (req, res) => {
        res.json(require('../collection/drinkerCollection.json'))
    }
}
