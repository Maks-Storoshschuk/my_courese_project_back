const router = require('express').Router();

const {usersController} = require('../controllers');

router.get('/',usersController.getUsers);
router.post('/',usersController.createUser);
router.get('/:id',usersController.getUserById);
router.delete('/:id',usersController.delete);

module.exports = router;
