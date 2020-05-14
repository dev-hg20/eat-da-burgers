// Import MySQL connection.
var connection = require("../config/connection");

// Object for all our SQL statement functions

const orm = {
  all: function (tableInput, cb) {
    const query = `SELECT * FROM ${tableInput}`;
    connection.query(query, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  create: function (table, column, value, cb) {
    const query = `INSERT INTO ${table} (${column}) VALUES (${value})`;
    connection.query(query, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  update: function (table, column1, value1, column2, value2, cb) {
    const query = `INSERT INTO ${table} SET ${column1} = ${value1} WHERE ${column2} = ${value2}`;
    connection.query(query, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
};

// Export orm
module.exports = orm;
