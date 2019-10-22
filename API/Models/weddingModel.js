const db = require("../../config/dbConfig");

module.exports = {
  find,
  findById,
  findByUserId,
  add,
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

function findById(id) {
  return db("wedding").where({ id: Number(id) });
}

function findByUserId(id) {
  return db("wedding").where({ user_id: Number(id) });
}

function add(wedding) {
  return db("wedding")
    .insert(wedding)
    .then(ids => ({ id: ids[0] }, { post: post }));
}

function updateContent(id, wedding) {
  return db("wedding")
    .where("id", Number(id))
    .update(wedding);
}

function remove(id) {
  return db("wedding")
    .where("id", Number(id))
    .del();
}
