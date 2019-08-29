$(window).on("load", function () {
    $(".thankYou").hide()

    $(".done").on("click", function () {
        alert("good to go")
    })

    $.get("/api/product").then(function (productData) {
        // console.log(productData)
        return res = productData
    })
    let cartTotal = 0
    let catArr = []
    let checkout = []
    let productsLeft = []
    let combined = []
    function pass() {
        this.checkout = checkout
        this.productsLeft = productsLeft
        this.combined = combined
    }

    $(".addCart").on("click", function () {
        // Identify which item was clicked
        let selectedProduct = $(this).val()

        // Connect the clicked item to the server
        let itemFilter = res.filter(res => res.productId == selectedProduct)

        // Check if the amount in the inventory is greater than 0
        let inventoryBalance = itemFilter[0].amount
        if (inventoryBalance > 0) {
            productsLeft.push(inventoryBalance)
            console.log(inventoryBalance)
            let product = itemFilter[0].name

            // Change the number for cart item every time the add to cart button is clicked
            let cartItem = parseInt($(".cartItem").text())
            cartItem++
            $(".cartItem").text(cartItem)

            // Update the total in the cart
            let cost = itemFilter[0].cost
            catArr.push(cost)
            cartTotal = cartTotal + cost
            $(".total").text(cartTotal)

            // Add the item to the cart list
            let newitem = $(".items").append("<p>" + product + "</p>")
            let newCost = $(".costList").append("<p> $" + cost + "</p>")

            // Keep track of items that have been added to cart
            let productId = itemFilter[0].productId
            checkout.push(productId)
            combo = productId + " " + inventoryBalance
            combined.push(combo)

            console.log(combo)
            return sendToServer = new pass(checkout, productsLeft, combined)
            return cartTotal
        } else {
            alert("This item is currently out of stock")
        }
        return cartTotal

    })
    $(".checkout").on("click", function () {
        alert("Thank you for shopping with us. Your total is $" + cartTotal)
        $(".cartTotal").text(cartTotal)
        $(".thankYou").show()
        console.log("checkedout")


        $.post('/api/product', sendToServer).then(function (res) {
            return res
        })

        window.location.reload(true)

    })
})


