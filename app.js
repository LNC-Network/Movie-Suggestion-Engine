import express from "express";
import path from "path";
import chalk from "chalk";
import { fileURLToPath } from "url";
import indexRoute from "./routes/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

// Serve static files with caching
app.use(
  express.static(path.join(__dirname, "public"), {
    etag: true,
    lastModified: true,
    maxAge: "1d",
  })
);

// Routes
app.use("/", indexRoute);

// Error Handling Middleware (Should be after all routes)
app.use((err, req, res, next) => {
  const timestamp = new Date().toLocaleString();
  console.error(chalk.red(`[${timestamp}] ERROR: ${err.message}`));
  res.status(500).send("Internal Server Error");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  const timestamp = new Date().toLocaleString();
  console.log(
    `${chalk.blue(`[${timestamp}]`)} Server running at ${chalk.green(
      `http://localhost:${PORT}`
    )}`
  );
});

export default app;
