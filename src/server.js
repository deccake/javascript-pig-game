const path = require("path");
const express = require("express");

const app = express();

const port = process.env.PORT || 3000;

const publicPathDirectory = path.join(__dirname, "../public");

app.use(express.static(publicPathDirectory));

app.listen(port, () => {
  console.log(`server is started on port ${port}`);
});
