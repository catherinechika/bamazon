var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static("public"))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ---------------ROUTES-----------
require("./routes/apiRoutes.js")(app, path);
require("./routes/htmlRoutes.js")(app, path);

// ---------------MODELS-----------
var db = require("./models");

// ---------------------------------
db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});
