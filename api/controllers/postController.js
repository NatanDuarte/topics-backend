const PostService = require('../services/postService');

const postService = new PostService();

class PostController {
    static async createPost(req, res) {
        try {
            const { userId } = req;
            const { title, content } = req.body;

            const dto = { authorId: userId, title, content }

            const post = await postService.createPost(dto);

            res.status(201).send(post);
        } catch (error) {
            console.error(error.stack || error);
            res.status(400).send({ message: error.message });
        }
    }

    static async getAllPosts(req, res) {
        try {
            
        } catch (error) {
            console.error(error.stack || error);
            res.status(400).send({ message: error.message });
        }
    }

    static async getPostById(req, res) {
        try {
            
        } catch (error) {
            console.error(error.stack || error);
            res.status(400).send({ message: error.message });
        }
    }

    static async editPost(req, res) {
        try {
            
        } catch (error) {
            console.error(error.stack || error);
            res.status(400).send({ message: error.message });
        }
    }

    static async deletePost(req, res) {
        try {
            
        } catch (error) {
            console.error(error.stack || error);
            res.status(400).send({ message: error.message });
        }
    }
}

module.exports = PostController;
