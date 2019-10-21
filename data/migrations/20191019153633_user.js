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
