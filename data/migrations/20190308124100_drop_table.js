
exports.up = function(knex, Promise) {
    return knex.schema.dropTableIfExists('games');
};

exports.down = function(knex, Promise) {
  
};
