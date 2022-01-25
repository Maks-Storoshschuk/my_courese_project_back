const router = require('express').Router();

const {newsController} = require('../controllers')

router.get('/',newsController.getNews );

module.exports = router;
