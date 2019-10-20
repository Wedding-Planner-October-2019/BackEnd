//UserInfo Table
exports.up = function(knex) {
  return knex.schema.createTable("user_info", userInfo => {
    userInfo.increments(); //PK
    userInfo.string("name", 128).notNullable();
    userInfo.integer("phone", 11);
    userInfo
      .string("email", 256)
      .notNullable()
      .unique();
    userInfo.string("location", 128).notNullable();
    //FK
    userInfo
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("user")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.droptTableIfExist("userInfo");
};
