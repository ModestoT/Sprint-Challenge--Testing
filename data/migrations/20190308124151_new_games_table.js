
exports.up = function(knex, Promise) {
    return knex.schema.createTable('games', game => {
      game.increments();
  
      game.string('title', 100).notNullable().unique();
      game.string('genre', 100).notNullable();
      game.integer('releaseYear');
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('games');
  };
