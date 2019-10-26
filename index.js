//Server Dependencies
const express = require('express')
const helmet = require('helmet')
require('dotenv')

//GET ROUTES
const primaryRouter = require('./api/server')
//Set Globals
const PORT = process.env.PORT || 5000
const path = require('path')
global.dbConfig = path.resolve(__dirname + '/data/dbConfig')

//Init Server
const server = express()
server.use(helmet())
server.use(express.json())

//Bring In the routes
server.use('/api',primaryRouter)

server.listen(PORT,()=>{
    console.log(`\n** Server Listening on port: ${PORT} **\n`)
})

