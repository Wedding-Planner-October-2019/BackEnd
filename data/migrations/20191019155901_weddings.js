//Wedding Table
exports.up = function(knex) {
  return knex.schema.createTable("wedding", tbl => {
    tbl.increments(); //PK
    tbl
      .string("wedding_name", 256)
      .notNullable()
      .unique();
    tbl.string("venue", 128);
    tbl.text("description", 256);
    //FK
    tbl
      .integer("userInfo_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("userInfo")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = function(knex) {};
