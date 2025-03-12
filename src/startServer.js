import chalk from "chalk";
const log = console.log;

export const getAvailablePort = (serverInstance, startPort = 3000) => {
  return new Promise((resolve, reject) => {
    let port = startPort;
    const tryPort = () => {
      const server = serverInstance.listen(port, () => {
        server.close();
        resolve(port);
      });
      server.on("error", (err) => {
        if (err.code === "EADDRINUSE") {
          log(chalk.white("busy port") + chalk.red(port));
          port++;
          tryPort();
        } else {
          reject(err);
        }
      });
    };
    tryPort();
  });
};

export const startServer = async (ServerInstance) => {
  try {
    const PORT =
      process.env.PORT || (await getAvailablePort(ServerInstance, 3000));
    ServerInstance.listen(PORT, () => {
      log(
        chalk.white("Server running at ") +
          chalk.green(`http://localhost:${PORT}`)
      );
    });
  } catch (err) {
    log(chalk.red("Error finding an available port:"), err);
  }
};
