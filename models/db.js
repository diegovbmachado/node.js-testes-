const Sequelize = require('sequelize')
const Sequelize = require('sequelize');

 //conexao com o banco de dadosssss
 const sequelize = new Sequelize('postapp', 'root','24584558',{
    host: "localhost",
    dialect: 'mysql'
})
module.exports = {Sequelize, sequelize};