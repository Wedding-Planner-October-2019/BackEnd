const db = require("../../config/dbConfig");

module.exports = {
  showAll
  //   showProfile
};

function showAll() {
  return db("wedding as w")
    .innerJoin("user as ui", "w.user_id", "w.id")
    .select(
      // "ui",
      // "w"
      "ui.name",
      "ui.phone",
      "ui.email",
      "ui.location",
      "w.user_id",
      "w.wedding_name",
      "w.venue",
      "w.guest_num",
      "w.description"
    );
  // .where("ui.wedding_id");
  // return db("wedding").where("user_info_id, id");
}

// function showProfile(id) {
//   //use find ID to and then select only the user's name, contact info, and weddings.
//   return db("user_info")
//     .select("id", "name")
//     .where({ id })
//     .first();
// }
