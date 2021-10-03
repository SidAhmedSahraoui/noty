const express = require("express");
const connectDB = require("./config/db");
const path = require("path");

const app = express();

// Connect DB
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Routes

app.use("/api/users", require("./routes/users"));
app.use("/api/notes", require("./routes/notes"));

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

const PORT = 5000;

app.listen(PORT, () => console.log(`Server started, port: ${PORT}`));