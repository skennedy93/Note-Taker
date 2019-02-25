// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './db/notes.sqlite3'
    }, 
    useNullAsDefault: true,
    migrations: {
      directory: './db/migrations',
      tableName: 'dbmigrations',
    },
    seeds: {
      directory: './db/seeds'
    }
  },

};
