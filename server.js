//Serving client page through the server
var express = require("express");
var path = require("path");
var serveStatic = require("serve-static");
app = express();
app.use(serveStatic(__dirname + "/build"));
var port = process.env.PORT || 5000;
app.listen(port);
console.log("server started " + port);

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "/build/index.html"), function(err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});
