import { Sequelize } from "sequelize";

const sequelize = new Sequelize('companydb', 'root','admin',{
    host: 'localhost',
    dialect: 'mysql'
})

export default sequelize;


/*
PORT=5000
DB_HOST=localhost
DB_PORT=3306
DB_USER= root
DB_PASSWORD=admin
DB_DATABASE = companydb
*/
