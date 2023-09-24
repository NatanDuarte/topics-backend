const bodyParser = require('body-parser');

const user = require('./UsersRoute');
const auth = require('./authRoute');
const roles = require('./rolesRoute');
const permission = require('./permissionRoute');
const security = require('./security');
const posts = require('./postRoute');


module.exports = app => {
    app.use(
        bodyParser.json(),
        auth,
        user,
        roles,
        security,
        permission,
        posts
    )
}
