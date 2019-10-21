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

function find(id) {
  return db("wedding");
  // .where('w.user_id')
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

function findByUserId(id) {
  return db("wedding").where({ id });
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
