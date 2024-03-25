"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('companydb', 'root', 'admin', {
    host: 'localhost',
    dialect: 'mysql'
});
exports.default = sequelize;
/*
PORT=5000
DB_HOST=localhost
DB_PORT=3306
DB_USER= root
DB_PASSWORD=admin
DB_DATABASE = companydb
*/
