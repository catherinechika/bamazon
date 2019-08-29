module.exports = function (app, path) {
    var answersArray = []

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/cart", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/cart.html"));
    });
}