const db = require("../../config/dbConfig");

module.exports = {
  showAll
  //   showProfile
};

function showAll() {
  // return db("wedding");
  return db("user as u")
    .join("wedding as w", "w.user_id", "u.id")
    .select("u.id", "u.name", "u.phone", "u.email", "u.location", "w.*");
  // .select("ui.id", "ui.name", "ui.phone", "ui.email", "ui.location", "w.*");
  //   .then(weddings => {
  //     weddings.sort(weddings.user_id);
  //     return weddings;
  // });
}
//NOTES
//look at how post project works
//wedding will use join and select like a tradtional post
//create search function by filter by user_id for portfolios
