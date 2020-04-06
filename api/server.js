const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const helmet = require("helmet");
const chalk = require("chalk"); // require chalk module to give colors to console text
const { port, host } = require("./config/variables");

const routes = require("./src/api/routes");

const app = express();
const connected = chalk.bold.cyan;
const warning = chalk.bold.yellow;
const termination = chalk.bold.red;

app.use(cors());
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("tiny"));

// All Api routes
app.use("/api", routes.members);

// Handles any requests that don't match the ones above
app.get("*", (request, response) => {
  response.status(404).send("404 Error: Page Not Found!");
});

app.listen(port, host, () =>
  console.log(
    connected(
      `App listening on port ${port} in ${app.settings.env} mode!`
    )
  )
);

process.on("warning", (error) => {
  console.warn(warning(`Express connection has occurred ${error} error!`));
});

process.on("exit", (code) => {
  console.error(termination(`About to exit with code: ${code}`));
  process.exit(0);
});
