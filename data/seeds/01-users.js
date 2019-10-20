exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("user").then(function() {
    // Inserts seed entries
    return knex("user").insert([
      { username: "weddingPlaner", password: "password1" },
      { username: "weddingPlaner1", password: "password1" },
      { username: "weddingPlaner2", password: "password1" }
    ]);
  });
};
