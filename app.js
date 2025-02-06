var express = require("express");
var path = require("path");

var app = express();

app.use(express.static(__dirname));

let PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

module.exports = app;
