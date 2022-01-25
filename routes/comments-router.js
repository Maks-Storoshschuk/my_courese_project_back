const router = require('express').Router();

const {commentsController} = require('../controllers');

router.get('/',commentsController.getComments);
router.post('/',commentsController.createComment);

module.exports = router;
