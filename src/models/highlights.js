const sql = require("sequelize")
const database = require("../config/db")
const stores = require("./address");
const products = require("./products");

const highlights = database.define("Highlights", {
    highlight_id: {
        type: sql.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    description: {
        type: sql.STRING(255),
        allowNull: false
    }
});

highlights.belongsTo(products, {
    foreignKey: 'product_id'
});

module.exports = highlights;