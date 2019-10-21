const db = require("../../config/dbConfig");

module.exports = {
  find,
  findById,
  findByUserId,
  add,
  updateName,
  updateContent,
  remove
};

function find() {
  return db("wedding");
  // .join("user as u", "u.id", "w.user_id")
  // .select("w.id", "w")
  // .where("w.user_id", userId);
}

// unction getUserPosts(userId) {
//     return db('posts as p')
//       .join('users as u', 'u.id', 'p.user_id')
//       .select('p.id', 'p.text', 'u.name as postedBy')
//       .where('p.user_id', userId);
//   }

function findById() {
  return db;
}

function findByUserId() {
  return db;
}

function add() {
  return db;
}

function updateName() {
  return db;
}

function updateContent() {
  return db;
}

function remove() {
  return db;
}
