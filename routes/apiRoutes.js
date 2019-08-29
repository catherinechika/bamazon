var db = require("../models");

module.exports = function (app, path) {

    let items = []

    app.get("/api/product", function (req, res) {
        db.Product.findAll()
            .then(function (data) {
                // console.log(data)
                res.json(data)
            })
    });
    app.get("/api/cart", function (req, res) {
        db.Product.findAll()
            .then(function (data) {
                // console.log(data)
                res.json(data)
            })
    });
    app.post("/api/product", function (req, res) {
        let result = req.body
        checkout = result.checkout
        productsLeft = result.productsLeft
        combined = result.combined
        // Sort to get an array of unique items that we bought
        var a = [], b = []
        let sortCheckout = sort(checkout, a, b)[0];
        console.log("Pruduct ID " + sortCheckout)

        // Sort to get how many times the products were bought
        var c = [], d = []
        let sortCombo = sort(combined, c, d)
        console.log("Product Frequency" + sortCombo[1])

        // Sort through to get the array of number of times its left
        let amtLeftArr = []
        for (let i = 0; i < sortCombo[0].length; i++) {
            myString = sortCombo[0][i]
            let amountLeft = myString[myString.length - 1];
            amountLeft = parseInt(amountLeft)
            if (amountLeft == 0) {
                amountLeft = 10
            }
            amtLeftArr.push(amountLeft)
        }
        console.log("Number of items in the inventory:   " + amtLeftArr)



        for (let i = 0; i < amtLeftArr.length; i++) {
            let balance = amtLeftArr[i] - sortCombo[1][i]
            let productToUpdate = sortCheckout[i]

            db.Product.update({
                amount: balance
            }, {
                    where: {
                        productId: productToUpdate
                    }
                }).then(function () {
                    res.json();
                });
        }
    });
}
function sort(arr, a, b) {
    var a = [], b = [], prev;
    for (var i = 0; i < arr.length; i++) {

        if (arr[i] !== prev) {
            a.push(arr[i]);
            b.push(1);
        } else {
            b[b.length - 1]++;
        }
        prev = arr[i];
    }
    return ([a, b])
}

