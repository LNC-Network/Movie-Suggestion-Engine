import sqlite3 from "sqlite3";
import path from "path";
import { fileURLToPath } from "url";
import chalk from "chalk";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbPath = path.join(__dirname, "data.sqlite3");

const log = console.log;

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    log(chalk.red("Error opening database:"), err);
  } else {
    log(chalk.green("Connected to the SQLite database."), err);
  }
});

db.run(
  "CREATE TABLE IF NOT EXISTS movies (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, genre TEXT)",
  (err) => {
    if (err) {
      log(chalk.red("Error creating table:"), err);
    }
  }
);

export default db;
