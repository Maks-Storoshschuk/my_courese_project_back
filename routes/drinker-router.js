const router = require('express').Router();

const {drinkersController} = require('../controllers')

router.get('/',drinkersController.getDrinkers );

module.exports = router;
