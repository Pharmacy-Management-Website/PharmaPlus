const app = require("./app.js");
const databaseConnection = require("./config/database.js");
const colors = require("colors");

// ! Handle UnCaught Exceptions
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`.red.bold);
  console.log(`Shutting down the server due to Uncaught Exceptions`.red.bold);
  process.exit(1);
});

// ? Config
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "backend/config/config.env" });
  app.use(express.static(path.join(__dirname, "/frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("Server is running in production mode");
  });
}

// ? Database Connection
databaseConnection();

const server = app.listen(process.env.PORT, () => {
  console.log(
    `Server Activated: http://localhost:${process.env.PORT}`.yellow.bold
  );
});

// ! Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`.red.bold);
  console.log(
    `Shutting down the server due to Unhandled Promise Rejection`.red.bold
  );
  server.close(() => {
    process.exit(1);
  });
});
