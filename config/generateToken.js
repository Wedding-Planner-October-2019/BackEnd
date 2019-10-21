const secrets = require("./secrets");
const jwt = require("jsonwebtoken");

module.exports = {
  generateToken
};
function generateToken(user) {
  const payload = {
    subject: user.id, // standard claim = sub
    username: user.username,
    password: user.password
  };
  const options = {
    expiresIn: "7d"
  };
  return jwt.sign(payload, secrets.jwtSecret, options);
}
