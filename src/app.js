const express = require("express");
const path = require("path");
const studentsRoutes = require("./routes")

const app = express();
const publicDirectoryPath = path.join(__dirname, "../public");

/**
 * Middleware to parse JSON bodies.
 * @function
 * @memberof module:app
 */
app.use(express.json());

/**
 * Middleware to parse URL-encoded bodies.
 * @function
 * @memberof module:app
 */
app.use(express.urlencoded({ extended: false }));

/**
 * Middleware to serve static files from the public directory
 * @function
 * @memberof module:app
 */
app.use(express.static(publicDirectoryPath));

/**
 * Sets up the student routes.
 * @function
 * @memberof module:app
 */
studentsRoutes(app);

module.exports = app;
