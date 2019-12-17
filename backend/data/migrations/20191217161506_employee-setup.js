
exports.up = function(knex) {
    return knex.schema.createTable("employee", tbl => {
        tbl.increments();
        tbl.text("name", 128).notNullable();
        tbl.text("phone", 128).unique().notNullable();
        tbl.text("petName", 128);
        tbl.text("emergencyContact").notNullable();
        tbl.text("email").unique().notNullable();
    });
  
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("employee");
};
