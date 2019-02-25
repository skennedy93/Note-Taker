
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('notes').del()
    .then(function () {
      // Inserts seed entries
      return knex('notes').insert([
        {title: 'note 1', textBody: 'first note'},
        {title: 'note 2', textBody: 'second note'},
        {title: 'note 3', textBody: 'third note'}
      ]);
    });
};
