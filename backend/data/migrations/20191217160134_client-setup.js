
exports.up = function(knex) {
  return knex.schema.createTable("client", tbl => {
      // creates a primary key called id
      tbl.increments();
      // creates a text field called name which is both required
      tbl.text("name", 128).notNullable();
      // creates a text field called phone which is required and unique
      tbl.text("phone", 128).unique().notNullable();
      // creates a text field called petName which is required
      tbl.text("petName", 128).notNullable();
      // creates a text field called emergencyContact which is required
      tbl.text("emergencyContact", 128).notNullable();
      // creates a text field called emergencyNum which is required and unique
      tbl.text("emergencyNum", 128).unique().notNullable();
      // creates a text field called email which is required and unique
      tbl.text("email", 128).unique().notNullable();
  });
};

exports.down = function(knex) {
  // drops (deletes) the entire table
  return knex.schema.dropTableIfExists("client");
};
