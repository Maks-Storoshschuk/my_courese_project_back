const router = require('express').Router();

const {drinkersController} = require('../controllers');

router.get('/',drinkersController.getDrinkers );
router.post('/',drinkersController.reserveDrinker);

module.exports = router;
