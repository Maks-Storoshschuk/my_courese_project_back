const router = require('express').Router();

const {commentsController} = require('../controllers');

router.get('/',commentsController.getComments);
router.post('/',commentsController.createComment);
router.get('/:id',commentsController.getCommentById);
router.delete('/:id',commentsController.delete);

module.exports = router;
