// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm");

const burger = {
  all: function (cb) {
    orm.all("burgers", function (res) {
      cb(res);
    });
  },

  create: function (name, cb) {
    orm.create("burgers", "name, devoured", `"${name}", false`, function (res) {
      cb(res);
    });
  },

  update: function (id, cb) {
    orm.update("burgers", "devoured", true, "id", `${id}`, function (res) {
      cb(res);
    });
  },
};

// Export the database functions
module.exports = burger;
