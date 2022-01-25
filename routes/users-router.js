const router = require('express').Router();

const {usersController} = require('../controllers')

router.get('/',usersController.getUsers);

module.exports = router;
