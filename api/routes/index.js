const bodyParser = require('body-parser');

const user = require('./UsersRoute');
const auth = require('./authRoute');
const roles = require('./rolesRoute');

module.exports = app => {
    app.use(
        bodyParser.json(),
        auth,
        user,
        roles
    )
}
