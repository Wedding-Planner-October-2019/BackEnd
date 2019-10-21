module.exports = {
  validateUserContent,
  validateUserId
};
const Users = require("../API/Models/userModel");

//Middleware for login and account creation
function validateUserContent(req, res, next) {
  if (
    !req.body.username ||
    !req.body.password ||
    !req.body.name ||
    !req.body.email ||
    !req.body.location
  ) {
    res.status(400).json({
      message:
        "Username, password, name, email, & location fields are required."
    });
  } else if (req.body.password.length !== 8) {
    res.status(404).json({ message: "password must be 8 characters long." });
  } else {
    next();
  }
}

function validateUserId(req, res, next) {
  const userId = req.params.id;
  Users.findById(userId).then(valUser => {
    console.log(valUser);
    if (valUser) {
      req.user = valUser;
      next();
    } else {
      res.status(400).json({ message: "invalid user id" });
    }
  });
}

// function validateUserName(req, res, next) {
//   const userName = req.body.username;
//   User.findBy(userName).then(valUser => {
//     console.log(valUser);
//     if (valUser) {
//       req.user = valUser;
//       next();
//     } else {
//       res.status(404).json({ message: "Username is already taken" });
//     }
//   });
// }
// async function checkValidUsername(req, res, next) {
//   const user = req.body;
//   const storedUser = await Users.findByUsername(user.username);
//   if (storedUser && user.username === storedUser.username)
//     next({
//       stat: 404,
//       message: "Username is already taken, please choose another."
//     });
//   else next();
// }
