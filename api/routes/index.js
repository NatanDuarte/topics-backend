const bodyParser = require('body-parser');

const user = require('./UsersRoute');
const auth = require('./authRoute');

module.exports = app => {
    app.use(
        bodyParser.json(),
        user,
        auth
    )
}
