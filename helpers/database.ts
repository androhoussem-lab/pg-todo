import { Sequelize } from "sequelize";
import pg from "pg";

const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;
const port = process.env.DB_PORT;
const name = process.env.DB_NAME;

//'postgres://user:pass@example.com:5432/dbname'
const sequelize = new Sequelize(
  `postgres://${user}:${password}@${host}:${port}/${name}`,
  {
    dialectModule: pg,
  }
);
export default sequelize;
