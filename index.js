require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./api/routes')

const app = express()

app.use(bodyParser.json())
routes(app);

const port = process.env.DEV_PORT;

app.listen(port, () => console.log(`Running at ${port}`));
