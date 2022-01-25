module.exports = {
    getPlaces: (req, res) => {
        res.json(require('../collection/placesCollection.json'))
    }
}
