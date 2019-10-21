//register
//login
//delete
//modify
// get users log in

const router = require("express").Router();
const bcrypt = require("bcryptjs");
const gt = require("../../../../config/generateToken");
const Users = require("../../../Models/userModel");
const mw = require("../../../../Middleware/validateUserContent");
const errorRef = require("../../../../Middleware/errorRef");

//Make an account
router.post("/register", mw.validateUserContent, (req, res) => {
  // implement registration
  const user = req.body;
  const hash = bcrypt.hashSync(user.password, 12);
  user.password = hash;

  Users.add(user)
    .then(newUser => {
      res.status(201).json({
        message: `successfully registered as ${newUser.username} your user ID is ${newUser.id}`
      });
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: "failed to create account", error }, errorRef(error));
    });
});

//Login for user account
router.post("/login", mw.validateUserContent, (req, res) => {
  // implement login
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        //produce token
        const token = gt.generateToken(user);

        //add token to response
        res.status(200).json({
          message: `Welcome ${user.username}!`,
          token
        });
      } else {
        res.status(401).json({ message: "Invalid Credentials" });
      }
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: "failed to login account" }, errorRef(error));
    });
});

module.exports = router;
