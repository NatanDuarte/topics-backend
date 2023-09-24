const { Router } = require('express');
const PostController = require('../controllers/postController');
const authenticate = require('../middleware/authenticate');

const router = Router()

router
    .post('/topic', authenticate, PostController.createPost)
    .get('/topic', PostController.getAllPosts)
    .get('/topic/:id', authenticate, PostController.getPostById)
    .put('/topic/:id', authenticate, PostController.editPost)
    .delete('/topic/:id', authenticate, PostController.deletePost);

module.exports = router;
