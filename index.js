const tracer = require("dd-trace").init();
const express = require("express");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const app = express();

console.log(process.env.SECRET_KEY);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.json({
    success: true,
  });
});

app.post("/", (req, res) => {
  res.json({
    success: true,
    body: req.body,
  });
});

app.delete("/", (req, res) => {
  res.json({
    success: true,
    msg: "delete request accepted",
  });
});

app.put("/", (req, res) => {
  res.json({
    success: true,
    msg: "put request accepted",
  });
});

app.listen(80, () => {
  console.log("Server started on port 3000");
});
