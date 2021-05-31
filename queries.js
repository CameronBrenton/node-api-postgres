const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'cameronbrenton',
    host: 'localhost',
    database: 'api',
    password: 'password',
    port: 5432
});

/*
 Create - POST
 Retreive - GET
 Update - PUT
 Delete - DELETE
*/

const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
        if (error) throw error;

        response.status(200).json(results.rows);
    });
};

module.exports = {
    getUsers,
}