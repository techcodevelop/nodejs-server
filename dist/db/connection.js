"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize(process.env.DB_DATABASE || "companydb", process.env.DB_USER || "root", process.env.DB_PASSWORD || "admin", {
    host: process.env.DB_HOST || "localhost",
    dialect: 'mysql'
});
/*
const sequelize = new Sequelize('companydb', 'root','admin',{
    host: 'localhost',
    dialect: 'mysql'
})
*/
exports.default = sequelize;
/*
PORT=5000
DB_HOST=localhost
DB_PORT=3306
DB_USER= root
DB_PASSWORD=admin
DB_DATABASE = companydb
*/
