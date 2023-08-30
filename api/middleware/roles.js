const db = require('../models');

const roles = (rolesList) => {
    return async (req, res, next) => {
        const { userId } = req

        const user = db.User.findOne({
            include: [
                {
                    model: db.roles,
                    as: 'user_roles',
                    attributes: ['id', 'name', 'description']
                }
            ],
            where: {
                id: userId
            }
        });

        if (!user) return res.send(401).send('User not found');

        const registeredRoles = user
            .user_roles.map((role) => role.name)
            .same((role) => rolesList.includes(role));

        if (!registeredRoles)
            return res.status(401).send('Route not allowed for this user');

        return next();
    }
}

module.exports = roles;
