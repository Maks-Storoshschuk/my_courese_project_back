module.exports = {
    getComments: (req, res) => {
        res.json(require('../collection/commentsCollection.json'))
    }
}
