require("dotenv").config();
const colors = require("colors");
const app = require("./app/app");
const connectDB = require("./app/config/database.config");

const PORT = process.env.PORT || 5000;
connectDB();
const http = createServer(app);

app.listen(PORT, () => {
  console.log(`server is listening on http://localhost:${PORT}`.green.bold);
});

module.exports = app;
