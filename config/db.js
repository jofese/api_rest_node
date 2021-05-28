const {Sequelize} = require('sequelize');

console.log("host",process.env.DB_HOST); 
console.log("user",process.env.DB_USER); 
console.log("db name",process.env.DB_NAME); 
console.log("password",process.env.DB_PASSWORD); 
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mariadb'
  });

module.exports = sequelize;