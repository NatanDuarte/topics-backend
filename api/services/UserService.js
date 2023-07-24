const db = require('../models');
const { hash } = require('bcryptjs');
const uuid = require('uuid')

class UserService {
    async register(dto) {
        const user = await db.Users.findOne({
            where: {
                email: dto.email
            }
        });

        if (user) {
            throw new Error('Email already exists');
        }

        try {
            const passwordHash = await hash(dto.password, 8);

            const newUser = await db.Users.create({
                id: uuid.v4(),
                name: dto.name,
                email: dto.email,
                password: passwordHash
            });

            return newUser;
        } catch(error) {
            throw new Error(`Error on database register`);
        }
    }

    async findUsers() {
        try {
            const users = await db.Users.findAll();

            return users;
        } catch (error) {
            throw new Error('Error getting users');
        }
    }
}

module.exports = UserService;