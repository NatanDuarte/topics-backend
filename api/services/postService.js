const db = require('../models');
const uuid = require('uuid')

class PostService {
    async createPost(dto) {
        const { title, content, authorId } = dto;

        if (!title) throw new Error(`Can't create post without title`);

        if (!content) throw new Error(`Can't create post without content`);

        if (!authorId) throw new Error(`Can't create post without authorId`);

        try {
            const newPost = await db.Post.create({
                id: uuid.v4(),
                author_id: authorId,
                up_votes: 0,
                down_votes: 0,
                title: title,
                content: content
            });

            return newPost;
        } catch (error) {
            throw new Error(`Error on database register: ${error.message}`);
        }
    }

    async getAllPosts() {
        try {
            
        } catch (error) {
            throw new Error(`Error on fetching database data: ${error.message}`);
        }
    }

    async getPostById() {
        try {
            
        } catch (error) {
            throw new Error(`Error on fetching database data: ${error.message}`);
        }
    }

    async editPost() {
        try {
            
        } catch (error) {
            throw new Error(`Error on fetching database data: ${error.message}`);
        }
    }

    async deletePost() {
        try {
            
        } catch (error) {
            throw new Error(`Error on fetching database data: ${error.message}`);
        }
    }
}

module.exports = PostService;
