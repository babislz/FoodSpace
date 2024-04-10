const sql = require("sequelize")
const database = require("../config/db")

const user = database.define("Users", {
    user_id: {
        type: sql.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    full_name: {
        type: sql.STRING(255),
        allowNull: false
    },
    user_name: {
        type: sql.STRING(255),
        allowNull: false,
        unique: true
    },
    user_pw: {
        type: sql.STRING(255),
        allowNull: false
    },
    user_email: {
        type: sql.STRING(255),
        allowNull: false
    },
    user_phone: {
        type: sql.STRING(255),
        allowNull: false
    },
    user_photo: {
        type: sql.STRING(255),
        allowNull: false
    }
})

module.exports = user;