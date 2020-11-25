console.log(require("dotenv").config({ path: __dirname + "/../../.env" }));
import Sequelize from "sequelize";
import fs from "fs";
import setupRelations from "./relation_setup";
import config from "../config/config.json";

const db = new Sequelize(
  config[process.env.MODE || "development"].database,
  config[process.env.MODE || "development"].username,
  config[process.env.MODE || "development"].password,
  {
    dialect: "mysql",
    username: config[process.env.MODE || "development"].username,
    password: config[process.env.MODE || "development"].password,
    host: config[process.env.MODE || "development"].host,
    define: {
      underscored: true,
      underscoredAll: true,
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
      deletedAt: "deleted_at",
      paranoid: true,
    },
    timezone: "+07:00",
    logging: (a, b, c) => {
      if (process.env.MODE === "development") {
        console.log(a);
      }
    },
  }
);

const authenticate = async () => {
  try {
    if (process.env.DISABLE_DB_LOGGING === "true") {
      console.log("DB Logging is disabled :)");
      db.options.logging = () => {};
    }
    await db.authenticate();
  } catch (error) {
    console.error(error);
    await authenticate();
  }
};

authenticate().then((_) => null); //eslint-disable-line

let files = fs.readdirSync(__dirname + "/generated");
for (let f of files) {
  if (f.indexOf("index.js") >= 0) continue;
  db.import("./generated/" + f);

  console.log(`Loaded Model file ${f}`);
}

setupRelations(db);
export default db;
