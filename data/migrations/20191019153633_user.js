//User table
exports.up = function(knex) {
  return knex.schema.createTable("user", users => {
    users.increments(); //PK
    users
      .string("username", 128)
      .notNullable()
      .unique();
    users.string("password", 8).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExist("users");
};
/// I need to add ids on the seed date to link the weddings and userinfo and users together. I need to figure out how to link the migration tables on the down so i can keep the in sperate files. Finish making wedding seed date.
