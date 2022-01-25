const router = require('express').Router();

const {commentsController} = require('../controllers')

router.get('/',commentsController.getComments);

module.exports = router;
