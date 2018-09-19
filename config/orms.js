const con = require('../config/connection.js');

// Helper function for SQL syntax.
// Let's say we want to pass 3 values into the mySQL query.
// In order to write the query, we need 3 question marks.
// The below helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";
const printQuestionMarks = num => {
    let arr = [];

    for (let i = 0; i < num; i++) {
        arr.push('?');
    }

    return arr.toString();
};

// helper function to convert object key: value pairs to SQL syntax
const objToSql = ob => {
    let arr = [];

    // loop through the keys and push the key: value as a string int arr
    for (key in ob) {
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string with spaces, add quotations (Agent Dale Cooper => 'Agent Dale Cooper')
            if (typeof value === 'string' && value.indexOf(" ") >= 0) {
                value = `'${value}'`;
            }
            // e.g. {name: 'Agent Dale Cooper'} => {"name='Agent Dale Cooper'"}
            // e.g. {devourer: true} => {"devourer=true"}
            arr.push(`${key}=${value}`);
        }
    }
    // translate array of strings to a single comma-separeted string
    return arr.toString();
}

// ORM object for our SQL queries
const orm = {

    selectAll: (tableInput, _cb) => {
        let queryString = `SELECT * FROM ${tableInput};`;
        // query to select all
        con.query(queryString, (err, res) => {
            if (err) throw err;
            // return the results in a callback
            _cb(res);
        });
    },
    //table is the db table, columns is the columns we want to insert the values into
    insertOne: (table, columns, values, _cb) => {
        let queryString = `INSERT INTO ${TABLE}`;

        queryString += ` (${columns.toString()}) `;
        queryString += `VALUES (${printQuestionMarks(values.length)}) `;

        console.log(queryString);

        con.query(queryString, values, (err, res) => {
            if (err) throw err;

            _cb(res);
        });
    },
    // objColVals example is {column: value}
    updateOne: (table, objColVals, condition, _cb) => {
        let queryString = `UPDATE ${table} SET `;

        queryString += `${objToSql(objColVals)} WHERE `;
        queryString += `${condition}`;

        console.log(queryString);

        con.query(queryString, (err, res) => {
            if (err) throw err;
            _cb(res);
        });
    }
};

module.exports = orm;