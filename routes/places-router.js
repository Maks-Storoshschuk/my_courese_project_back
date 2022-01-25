const router = require('express').Router();

const {placesController} = require('../controllers');

router.get('/', placesController.getPlaces);
router.post('/', placesController.createPlace);

module.exports = router;
