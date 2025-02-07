import "dotenv/config"; // Load environment variables
import express from "express";
import path from "path";
import chalk from "chalk";
import { fileURLToPath } from "url";
import indexRoute from "./routes/index.js";

/* global process */ // Fix no-undef issue

// Setup __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware for static files
app.use(express.static(path.join(__dirname, "public"), { maxAge: "1d" }));

// Routes
app.use("/", indexRoute);

// Handle 404 - Not Found
app.use((req, res) => {
  res.status(404).json({
    status: "error",
    message: "Route not found",
  });
});

// Centralized Error Handling Middleware
/* eslint-disable no-unused-vars */
app.use((err, req, res, next) => {
  const timestamp = new Date().toLocaleString();
  console.error(
    chalk.red(`[${timestamp}] ERROR: ${err.message}`),
    err.stack ? `\n${chalk.gray(err.stack)}` : ""
  );

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
