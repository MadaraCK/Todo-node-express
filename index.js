const express =  require('express');
const app = express();
const  apiRouter = require('./routes/api');
const {port} = require('./config')
//db

require('./db/mongoose')
// routes
app.use('/', apiRouter)

//server
app.listen(port, function (){
    console.log('serwer słucha... http:' + port)
})

