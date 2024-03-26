import { Sequelize } from "sequelize";

import {
    DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USER
    
    } from "../config"

const sequelize = new Sequelize(
    DB_DATABASE,
    DB_USER, 
    DB_PASSWORD,
    {
        host: DB_HOST,
       dialect: 'mysql'
    })
/*
const sequelize = new Sequelize('companydb', 'root','admin',{
    host: 'localhost',
    dialect: 'mysql'
})
*/
export default sequelize;


/*
PORT=5000
DB_HOST=localhost
DB_PORT=3306
DB_USER= root
DB_PASSWORD=admin
DB_DATABASE = companydb
*/
