const router = require('express').Router();

const {placesController} = require('../controllers');

router.get('/', placesController.getPlaces);
router.post('/', placesController.createPlace);
router.get('/:id', placesController.getPlaceById);
router.delete('/:id', placesController.delete);

module.exports = router;
