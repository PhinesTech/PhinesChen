Promise = require("bluebird");

const app = require("./config/express");
const chalk = require("./config/chalk");
const { port, host } = require("./config/variables");

// Listen to requests
app.listen(port, host, () =>
  console.log(
    chalk.connected(
      `Example app listening on port ${port} in ${app.settings.env} mode!`
    )
  )
);

process.on("warning", (error) => {
  console.warn(
    chalk.warning(`Express connection has occurred ${error} error!`)
  );
});

process.on("exit", (code) => {
  console.error(chalk.termination(`About to exit with code: ${code}`));
  process.exit(0);
});

process.on("unhandledRejection", (error) => {
  // Will print "unhandledRejection error is not defined"
  console.log("unhandledRejection", error.message);
});

new Promise((_, reject) => reject(new Error("woops"))).catch((error) => {
  // Will not execute
  console.log("caught", error.message);
});

/**
 * Exports Express
 * @public
 */
module.exports = app;
