const Pool = require('pg').Pool

 const pool = new Pool({
    user: 'postgres',
    password: 'Deepak@2k',
    database: 'todos_db',
    host: 'localhost',
    port: '5432'
})

module.exports = pool