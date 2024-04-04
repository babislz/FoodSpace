const sql = require("sequelize")
// const database = new sql("FoodSpaceDB", "FoodSpaceAdm", "foodspace2024", {dialect:"mssql", host:"localhost", port:64741})
const database = new sql("FoodSpaceDB", "FoodSpaceAdm", "foodspace2024", {dialect:"mssql", host:"localhost", port:64741})

database.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });

database.sync()
module.exports = database