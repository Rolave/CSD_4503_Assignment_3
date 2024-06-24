const app = require("./app");

const port = process.env.port || 3000;
const address = `0.0.0.0:${port}`;

/**
 * Starts the server and listens on the specified port.
 * @function
 * @memberof module:server
 * @param {number} port - The port number to listen on.
 * @param {function} callback - The callback function to execute when the server starts.
 */
app.listen(port, () => {
  console.log(`starting app on: ${address}`);
});
