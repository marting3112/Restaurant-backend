const {sequelize, Sequelize} = require ('sequelize');

var dataBase = 'restaurantDB';
var userName = 'postgress';
var password = '123456789';

const connection = new Sequelize(dataBase, userName,password,{
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = connection;