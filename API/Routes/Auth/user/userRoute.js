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
      console.log(newUser);
      res.status(201).json({
        message: "successfully registered new user",
        userData: newUser
      });
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "failed to create account", error: errorRef(err) });
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

//Get all users
router.get("/", (req, res) => {
  Users.find().then(users => {
    res.status(200).json(users);
  });
});

//Get user by id
router.get("/:id", (req, res) => {
  const id = req.params.id;
  Users.findById(id).then(user => {
    res.status(200).json(user);
  });
});

module.exports = router;
