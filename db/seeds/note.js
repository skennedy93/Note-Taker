
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('notes').del()
    .then(function () {
      // Inserts seed entries
      return knex('notes').insert([
        {title: 'note 1', content: 'first note'},
        {title: 'note 2', content: 'second note'},
        {title: 'note 3', content: 'third note'}
      ]);
    });
};
