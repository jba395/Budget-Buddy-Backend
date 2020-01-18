
exports.up = function(knex) {
  knex.schema.createTable('users', (table) => {
      table.increments('id'); // primary key
      table.string('firstName');
      table.string('lastName');
      table.string('username');
      table.string('password');
  })
};

exports.down = function(knex) {
  
};
