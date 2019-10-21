const db = require("../../config/dbConfig");

module.exports = {
  find,
  findById,
  findBy,
  findByUsername,
  add,
  update
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

function update(id, changes) {
  return db("user")
    .where({ id })
    .update(changes)
    .then(id => {
      return findById(id);
    });
}
