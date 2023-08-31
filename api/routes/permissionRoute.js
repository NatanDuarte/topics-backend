const { Router } = require('express');
const roles = require('../middleware/roles');
const PermissionController = require('../controllers/permissionController');
const router = Router();

const allowedRoles = ['admin', 'dev']

router
    .post('/permission', roles(allowedRoles), PermissionController.register)
    .get('/permission', roles(allowedRoles), PermissionController.getAll)
    .get('/permission/:id', roles(allowedRoles), PermissionController.getById)
    .put('/permission/:id', roles(allowedRoles), PermissionController.update)
    .delete('/permission/:id', roles(allowedRoles), PermissionController.delete);

module.exports = router;
