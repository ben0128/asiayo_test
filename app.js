const express = require("express");
const router = require("./routes/index.js");
const app = express();
const port = process.env.PORT || 3000;
require("dotenv").config();

app.use("/api", router);

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});

module.exports = app;
