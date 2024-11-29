
const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.DB_USER || "vchumakovv",
  host: process.env.DB_HOST || "wiseweb.postgres.database.azure.com",
  database: process.env.DB_NAME || "postgres",
  password: process.env.DB_PASSWORD || "Chumakovv007",
  port: process.env.DB_PORT || 5432,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
  getClient: () => pool.connect(),
};
