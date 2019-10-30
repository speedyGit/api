//Server Dependencies
const express = require("express");
const helmet = require("helmet");
require("dotenv").config();

//Set Globals
const PORT = process.env.PORT || 5000;
const ENV = process.env.DB_ENV || "DEFAULT development";
const HASH = process.env.HASH || "DEFAULT(8)"; //Used for Bcrypt

//Global Paths
const path = require("path");
global._dbConfig = path.resolve(__dirname + "/data/dbConfig"); //MAIN DB CONF
global._jwt = path.resolve(__dirname + "/api/auth/preAuth/jwtAccess"); //JWT AUTH

//Require Routes after Globs Declaration to insure they inherate the Globs
const primaryRouter = require("./api/server");

//Init Server
const server = express();
server.use(helmet());
server.use(express.json());

//Bring In the routes
server.use("/", primaryRouter);

//Errors
server.use('/',(req,res)=>{
  res.status(404).json({message:"Nothing lives here"});
})
//Fire the ol'gal up
server.listen(PORT, () => {
  console.log(`\n** Server Listening on port: ${PORT} **\n`);
  console.log(`** Using: ${ENV} Environment **\n`);
  console.log(`** SaltVersion: ${HASH} with  Bcrypt **\n`);
});
