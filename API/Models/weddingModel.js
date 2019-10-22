const db = require("../../config/dbConfig");

module.exports = {
  find,
  findById,
  findByUserId,
  add,
  addByUser,
  updateContent,
  remove,
  removeAllWeddings
};

function find(id) {
  return db("wedding");
}

function findById(id) {
  return db("wedding").where({ id: Number(id) });
}

function findByUserId(id) {
  return db("wedding").where({ user_id: Number(id) });
}

function addByUser(userId, weddingPost) {
  weddingPost.user_id = userId;
  return db("wedding")
    .where("user_id", Number(userId))
    .insert(weddingPost)
    .then(ids => {
      return findById(ids[0]);
    });
}

function add(wedding) {
  return db("wedding")
    .insert(wedding, "id")
    .then(([id]) => findById(id));
}

function updateContent(id, wedding) {
  return db("wedding")
    .where("id", Number(id))
    .update(wedding)
    .then(ids => {
      return findById(ids);
    });
}

function remove(id) {
  return db("wedding")
    .where("id", Number(id))
    .del();
}
function removeAllWeddings(id) {
  return db("wedding")
    .where("user_id", Number(id))
    .del();
}
