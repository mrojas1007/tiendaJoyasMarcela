const { Pool } = require('pg')

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'postgres',
    database: 'joyas',
    allowExitOnIdle: true
});

module.exports = { pool };