exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users").then(function() {
    // Inserts seed entries
    return knex("users").insert([
      { username: "weddingPlaner", password: "password1" },
      { username: "weddingPlaner", password: "password1" },
      { username: "weddingPlaner", password: "password1" }
    ]);
  });
};
