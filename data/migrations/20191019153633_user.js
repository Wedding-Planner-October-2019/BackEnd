//User table
exports.up = function(knex) {
  return knex.schema.createTable("user", users => {
    users.increments(); //PK
    users
      .string("username", 128)
      .notNullable()
      .unique();
    users.string("password", 8).notNullable();
    users.string("name", 128).notNullable();
    users.integer("phone", 11);
    users
      .string("email", 256)
      .notNullable()
      .unique();
    users.string("location", 128).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExist("users");
};
