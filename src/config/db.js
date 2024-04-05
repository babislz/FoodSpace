const secrets = require('./secrets')
const sql = require("sequelize");

//File: secrets.js

// module.exports = {
//     database: "FoodSpaceDB",
//     login: "FoodSpaceAdm",
//     pw: "foodspace2024",
//     dialect: "mssql",
//     host: "localhost",
//     port: 52478
// };
// const database = new sql("FoodSpaceDB", "FoodSpaceAdm", "foodspace2024", {dialect:"mssql", host:"localhost", port:64741})
// const database = new sql("FoodSpaceDB", "FoodSpaceAdm", "foodspace2024", {dialect:"mssql", host:"localhost", port:52478})
const database = new sql(secrets.database, secrets.login, secrets.pw, {dialect: secrets.dialect, host:secrets.host, port: secrets.port})

/*
SELECT value_data
FROM sys.dm_server_registry
WHERE registry_key LIKE '%IPALL%'
AND value_name LIKE 'Tcp%Port%'
AND NULLIF(value_data, '') IS NOT NULL
*/
database.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });

database.sync()
module.exports = database