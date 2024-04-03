const sql = require("sequelize")
const database = new sql("FoodSpaceDB", "FoodSpaceAdm", "foodspace2024", {dialect:"mssql", host:"localhost", port:64741})
// const database = new sql("FoodSpaceDB", "FoodSpaceAdm", "foodspace2024", {dialect:"mssql", host:"localhost", port:52478})
database.sync()
module.exports = database