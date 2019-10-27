//Server Dependencies
const express = require("express");
const helmet = require("helmet");
require("dotenv").config();

//Set Globals
const PORT = process.env.PORT || 5000;
const ENV = process.env.DB_ENV || "DEFAULT development";
const HASH = process.env.HASH || "DEFAULT(8)";
const path = require("path");
global.dbConfig = path.resolve(__dirname + "/data/dbConfig");

//Require Routes after Globs Declaration to insure they inherate the Globs
const primaryRouter = require("./api/server");

//Init Server
const server = express();
server.use(helmet());
server.use(express.json());

//Bring In the routes
server.use("/api", primaryRouter);

//Fire the ol'gal up
server.listen(PORT, () => {
  console.log(`\n** Server Listening on port: ${PORT} **\n`);
  console.log(`** Using: ${ENV} Environment **\n`);
  console.log(`** FactoringHash: ${HASH} with  Bcrypt **\n`);
});
