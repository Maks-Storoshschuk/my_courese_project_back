const router = require('express').Router();

const {drinkersController} = require('../controllers');

router.get('/',drinkersController.getDrinkers );
router.post('/',drinkersController.reserveDrinker);
router.get('/:id',drinkersController.getDrinkerById );
router.delete('/:id',drinkersController.delete);

module.exports = router;
