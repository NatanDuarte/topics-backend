const { Router } = require('express');
const UserController = require('../controllers/UserController');
const authenticate = require('../middleware/authenticate');

const router = Router()

router.use(authenticate)

router
    .post('/users', UserController.register)
    .get('/users', UserController.getUsers)
    .get('/users/id/:id', UserController.getUserById)
    .put('/users/id/:id', UserController.editUser)
    .delete('/users/id/:id', UserController.deleteUser);

module.exports = router;
