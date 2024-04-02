const sql = require("sequelize")
const database = new sql("foodspace", "admero", "123", {dialect:"mssql", host:"localhost", port:0})
database.sync()
module.exports = database