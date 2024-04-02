const sql = require("sequelize")
const database = require("../config/db")

const user = database.define("Users", {
    user_id: {
        type: sql.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    user_name: {
        type: sql.STRING(255),
        allowNull: false
    },
    user_pw: {
        type: sql.STRING(255),
        allowNull: false
    },
    age: {
        type: sql.INTEGER,
        allowNull: false
    }
})

module.exports = user