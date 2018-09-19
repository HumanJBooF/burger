const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "", // gonna do a dotenv here again
    database: "burgers_db"
});

con.connect((err) => {
    if (err) {
        console.log(`ERROR CONNECTING: ${err.stack}`);
        return;
    }
    console.log(`Connect as id ${con.threadId}`);
});

module.exports = con;