const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("todo", "root", "", {
    host: "localhost",
    dialect: "mysql",
    logging: false,
    sync: true
});

module.exports = sequelize;