// Update with your config settings.
//* ID (serial) * linkedin_id column (it should be unique) * email column (it should be unique) * preferred_name * last_name * avatar_url

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost:5432/linkedin_passport'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }

};
