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
  return db("user", "user_info");
} //working

function findById(id) {
  return db("user")
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

async function add(user) {
  const [id] = await db("user").insert(user, "id");

  return findById(id);
}

function updateContent() {
  return db;
}
