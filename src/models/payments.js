const sql = require("sequelize")
const database = require("../config/db")
const user = require("./users")

const payments = database.define("Payments", {
    card_id: {
        type: sql.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    card_name:{
        type: sql.STRING(255),
        allowNull: false
    },
    card_number:{
        type: sql.INTEGER,
        allowNull: false
    },
    card_sec:{
        type: sql.INTEGER,
        allowNull: false
    }
})
payments.belongsTo(user, {
    foreignKey: 'user_id'
})
module.exports = payments