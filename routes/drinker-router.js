const router = require('express').Router();

router.get('/', (req, res) => {
    res.json(require('../collection/drinkerCollection.json'))
});

module.exports = router;
