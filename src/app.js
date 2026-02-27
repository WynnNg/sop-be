const express = require("express");
const morgan = require("morgan");
const { default: helmet } = require("helmet");
const compression = require("compression");
const app = express();

require("dotenv").config();

// init middleware
app.use(morgan("dev"));
app.use(helmet()); // Bảo vệ thông tin, cookie
app.use(compression()); //Nén giảm dung lượng dữ liệu
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);

// init db
require("./dbs/init.mongodb");
// const { checkOverload } = require('./helpers/check.connect')
// checkOverload()

// init routes
app.use("/", require("./routes"));

// handling error
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  const statusCode = error.status || 500;
  return res.status(statusCode).json({
    status: "error",
    code: statusCode,
    message: error.message || "Internal Server Error",
  });
});

module.exports = app;
