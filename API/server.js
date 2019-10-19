const express = require("express");
const helmet = require("helmet");
const server = express();
const cors = require("cors");

server.use(helmet(), express.json(), cors());

//Imports
// const userRoute = require('./Routes/Auth/user/userRoute');
// const weddingRoute = require('./Routes/')
// const portfolioRoute = require('./Routes/nonAuth/portfolio/portfolioRoute');

//Routes
// server.use('/api/auth/user', userRoute);
// server.use('/api/auth/user/:id/weddings', weddingRoute);
// server.use('/api/portfolio', portfolioRoute);

//Deployment
server.get("/", (req, res) => {
  res.status(200).json("Successful Deployment");
});

module.exports = server;
