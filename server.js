require("dotenv").config();
const colors = require("colors");
const { createServer } = require("http");
const app = require("./app/app");
const connectDB = require("./app/config/database.config");

const PORT = process.env.PORT || 5000;
connectDB();
const http = createServer(app);

http.listen(PORT, () => {
  console.log(`server is listening on http://localhost:${PORT}`.green.bold);
});

module.exports = http;
