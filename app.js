import "dotenv/config";
import express from "express";
import path from "path";
import chalk from "chalk";
import { fileURLToPath } from "url";
import indexRoute from "./routes/index.js";

/* global process */

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(
  express.static(path.join(__dirname, "public") /* , { maxAge: "1h" } */)
);

app.use("/", indexRoute);

// 404 Handler (Fix)
app.use((req, res, next) => { 
  res.status(404).json({
    status: "error",
    message: "Route not found",
  });
});

// Global Error Handler (Fix)
app.use((err, req, res, next) => { 
  console.error(chalk.red(`[ERROR] ${err.message}`));
  if (err.stack) {
    console.error(chalk.gray(err.stack));
  }
  res.status(err.status || 500).json({
    status: "error",
    message: err.message || "Internal Server Error",
  });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(
    `${chalk.blue("[log] ") + chalk.white("Server running at")} ${chalk.green(
      `http://localhost:${PORT}`
    )}`
  );
});

process.on("uncaughtException", (err) => {
  console.error(chalk.red("[Critical Error] Uncaught Exception:"), err);
  process.exit(1);
});

process.on("unhandledRejection", (reason, _promise) => {
  console.error(chalk.red("[Warning] Unhandled Promise Rejection:"), reason);
});
