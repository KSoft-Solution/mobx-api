import { config } from "dotenv";
config();
import "colors";
import { createServer } from "http";
import app from './app/app.js'
import connectDB from "./app/config/database.config.js";

const PORT = process.env.PORT || 5000;
connectDB()

const http = createServer(app)


http.listen(PORT, () => {
  console.log(`server is listening on http://localhost:${PORT}`.green.bold);
});

export default http