"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = require("../config");
const sequelize = new sequelize_1.Sequelize(config_1.DB_DATABASE || "companydb", config_1.DB_USER || "root", config_1.DB_PASSWORD || "admin", {
    host: config_1.DB_HOST || "localhost",
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
