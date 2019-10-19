const express = require("express");
const helmet = require("helmet");
const server = express();
const cors = require("cors");

server.use(helmet(), express.json(), cors());

//Deployment
server.get("/", (req, res) => {
  res.status(200).json("Successful Deployment");
});

module.exports = server;
