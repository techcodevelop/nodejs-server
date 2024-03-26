import { config } from "dotenv";

config();

export const PORT: string =process.env.PORT || "3000";
export const DB_HOST: string = process.env.DB_HOST || "localhost";
export const DB_USER: string = process.env.DB_USER || "root";
export const DB_PASSWORD: string = process.env.DB_PASSWORD || "admin";
export const DB_DATABASE: string = process.env.DB_DATABASE || "companydb";
export const DB_PORT: string= process.env.DB_PORT || "3306";
