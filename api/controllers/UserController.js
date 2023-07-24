const UserService = require('../services/UserService');

const userService = new UserService();

class UserController {
    static async register(req, res) {
        const { name, email, password } = req.body;

        if (!name) throw new Error('Name is required');
        if (!email) throw new Error('Email is required');
        if (!password) throw new Error('Password is required');

        try {
            const user = await userService.register({ name, email, password });

            res.status(201).send(user);
        } catch (error) {
            console.error(error.stack || error);
            res.status(400).send({ message: error.message });
        }
    }

    static async getUsers(_, res) {
        try {
            const users = await userService.findUsers();
            res.status(200).send(users);
        } catch (error) {
            console.error(error.stack || error);
            res.status(400).send({ message: error.message });
        }
    }
}

module.exports = UserController;