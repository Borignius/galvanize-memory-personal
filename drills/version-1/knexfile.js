// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql:///resolution'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
