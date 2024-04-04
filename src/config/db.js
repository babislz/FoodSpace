const sql = require("sequelize")
const database = new sql("FoodSpaceDB", "root", "AKDAgmr007@", {dialect:"mysql", host:"localhost", port:3306})
// const database = new sql("FoodSpaceDB", "FoodSpaceAdm", "foodspace2024", {dialect:"mssql", host:"localhost", port:52478})

database.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });

database.sync()
module.exports = database