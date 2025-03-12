import express from "express";
import { GetMovieSuggestion } from "./GetMovieSuggestion.js"; // Corrected import
import { startServer } from "./startServer.js";

const ServerInstance = express();
ServerInstance.set("view engine", "ejs");

ServerInstance.get("/", GetMovieSuggestion);

startServer(ServerInstance);

process.on("SIGINT", () => {
  console.log("Server shutting down...");
  process.exit();
});
