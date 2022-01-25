const router = require('express').Router();

router().get('/', (req, res) => {
    res.json(require('../collection/usersCullection.json'))
});

module.exports = router;
