//* ID (serial) * linkedin_id column (it should be unique) * email column (it should be unique) * preferred_name * last_name * avatar_url
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    table.increments();
    table.string('linkedin_id').unique();
    table.string('email').unique();
    table.string('preferred_name');
    table.string('last_name');
    table.text('avatar_url');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
