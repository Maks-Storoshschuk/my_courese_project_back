const router = require('express').Router();

const {newsController} = require('../controllers');

router.get('/',newsController.getNews );
router.post('/',newsController.createNews );

module.exports = router;
