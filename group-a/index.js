require("dotenv").config({ path: "./.env" });

console.log("DB_USER value:", process.env.DB_USER);
console.log("DB_PASSWORD value:", process.env.DB_PASSWORD);