"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB_PORT = exports.DB_DATABASE = exports.DB_PASSWORD = exports.DB_USER = exports.DB_HOST = exports.PORT = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.PORT = parseInt(process.env.PORT || "3000", 10);
exports.DB_HOST = process.env.DB_HOST || "localhost";
exports.DB_USER = process.env.DB_USER || "root";
exports.DB_PASSWORD = process.env.DB_PASSWORD || "admin";
exports.DB_DATABASE = process.env.DB_DATABASE || "companydb";
exports.DB_PORT = parseInt(process.env.DB_PORT || "3306", 10);
