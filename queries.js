const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'cameronbrenton',
    host: 'localhost',
    database: 'api',
    password: 'password',
    port: 5432
});