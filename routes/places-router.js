const router = require('express').Router();

const {placesController} = require('../controllers')

router.get('/',placesController.getPlaces );

module.exports = router;
