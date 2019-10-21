const db = require("../../config/dbConfig");

module.exports = {
  find,
  findById,
  findBy,
  findByUsername,
  add,
  updateContent
};

function find() {
  return db("user").select("username", "name", "phone", "email", "location");
} //working

function findById(id) {
  return db("user")
    .select("username", "name", "phone", "email", "location")
    .where({ id })
    .first();
}

function findBy(filter) {
  return db("user").where(filter);
}

function findByUsername(username) {
  return db("user")
    .where({ username })
    .first();
}

function add(user) {
  return db("user")
    .insert(user)
    .then(ids => {
      return findById(ids[0]);
    });
}

function updateContent() {
  return db;
}
