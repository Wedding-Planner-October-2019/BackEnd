const db = require("../../config/dbConfig");

module.exports = {
  showAll
  //   showProfile
};

function showAll() {
  return db("wedding as w")
    .innerJoin("user as ui", "w.user_id", "w.id")
    .select(
      "ui.id",
      "ui.name",
      "ui.phone",
      "ui.email",
      "ui.location",
      "w.user_id",
      "w.id",
      "w.wedding_name",
      "w.venue",
      "w.guest_num",
      "w.description"
    );
  // // .then(data => {
  // //   const weddingArray = [];
  // //   data.push(weddingArray).then(() => {
  // //     return weddingArray;
  // //   });
  // });
}

// function showProfile(id) {
//   //use find ID to and then select only the user's name, contact info, and weddings.
//   return db("user_info")
//     .select("id", "name")
//     .where({ id })
//     .first();
// }

//NOTES
//look at how post project works
//wedding will use join and select like a tradtional post
//create search function by filter by user_id for portfolios
