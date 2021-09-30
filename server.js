const express = require("express");
const app = express();

// Connect MongoDB
connectDB();

// Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/notes", require("./routes/notes"));
app.use("/api/auth", require("./routes/auth"));

app.use(express.static("client/build"));
app.get("*", (req, res) =>
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
);

const PORT = 5001;

app.listen(PORT, () => console.log(`server started ${PORT}`));
