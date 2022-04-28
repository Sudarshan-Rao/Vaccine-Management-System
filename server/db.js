const Pool = require("pg").Pool;

const pool = new Pool({
    user: "sudarshanrao",
    password: "",
    host: "localhost",
    port: 5432,
    database: "vaccineManagementDB"
});

module.exports = pool;
