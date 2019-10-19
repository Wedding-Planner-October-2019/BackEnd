const express = require("express");
const helmet = require("helmet");
const server = express();
const cors = require("cors");

server.use(helmet(), express.json(), cors());

//Imports
// const userRoute = require('./Routes/Auth/user/userRoute');
// const weddingRoute = require('./Routes/')

//Routes
// server.use('/auth/user', userRoute);
// server.use('/auth/user/:id/weddings', weddingRoute);

//Deployment
server.get("/", (req, res) => {
  res.status(200).json("Successful Deployment");
});

module.exports = server;
