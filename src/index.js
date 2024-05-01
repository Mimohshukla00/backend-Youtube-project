const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const PORT = process.env.PORT || 5000;
const app = express();

// middleware
app.use(express.json());

// connection if db

require("./db/database").connectDB();
app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
app.get("/", (req, res) => {
  // console.log(req.ip)
  // console.log(req.ips)
  // console.log(req.originalUrl)
  // console.log(req.params)
  // console.log(req.path)
  // console.log(req.xhr);
  res.send("hello world");
});
