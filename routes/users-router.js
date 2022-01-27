const router = require('express').Router();

const {usersController} = require('../controllers');
const {userMiddleware} = require('../middlewares');

router.get('/',usersController.getUsers);
router.post('/',userMiddleware.isUserBodyValid,userMiddleware.checkUserEmail,usersController.createUser);

router.get('/:id',usersController.getUserById);
router.delete('/:id',usersController.delete);

module.exports = router;
