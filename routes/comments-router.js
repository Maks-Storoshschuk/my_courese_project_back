const router = require('express').Router();

router.get('/', (req, res) => {
    res.json(require('../collection/commentsCollection.json'))
});

module.exports = router;
