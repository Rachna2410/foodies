const express = require("express");
const cors = require("cors");
require("./db/config");
const app = express();
app.use(express.json());
app.use(cors());
// const port = 5000;
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// app.use(express.json());
app.use("/api", require("./Routes/CreateUser"));
app.use("/api", require("./Routes/DisplayData"));
app.listen(5000);
