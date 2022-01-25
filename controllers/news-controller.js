module.exports = {
    getNews: (req, res) => {
        res.json(require('../collection/newsCollection.json'))
    }
}
