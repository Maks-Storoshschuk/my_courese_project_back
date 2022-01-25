const router = require('express').Router();

const {newsController} = require('../controllers');

router.get('/',newsController.getNews );
router.post('/',newsController.createNews );
router.get('/:id',newsController.getNewsById );
router.delete('/:id',newsController.delete);

module.exports = router;
