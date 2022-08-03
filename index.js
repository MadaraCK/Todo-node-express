const express = require('express');
const app = express();
const {port} = require('./config');
const apiRouter = require('./routes/api');
const bodyParser = require('body-parser');

//db
require('./db/mongoose')

// routes
app.use('/api/', apiRouter)

// parser
app.use(bodyParser.json())

//server
app.listen(port, function () {
    console.log('serwer słucha... http:' + port)
})

