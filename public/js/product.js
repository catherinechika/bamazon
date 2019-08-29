$(window).on("load", function () {


    $.get("/api/cart").then(function (productData) {
        // alert("loader done")
        // ***********PRODUCT1***********
        res = productData[0]
        // ****************ADD IMAGE****************
        let url = res.image
        console.log(url)
        var img = $('<img id="dynamic">');
        img.attr('src', url);
        img.attr('class', "card-img-top image")
        img.appendTo('#imagediv1');
        // ****************ADD PRODUCT NAME****************
        let productId = res.productId
        let productName = res.name
        $(".product1").text(productName)
        // ****************ADD PRODUCT COST****************
        let productCost = res.cost
        $(".cost1").text(productCost)
        console.log(productCost, productId, productName)

        // ***********PRODUCT2***********
        res = productData[1]
        // ****************ADD IMAGE****************
        url = res.image
        addImage(url)
        img.appendTo('#imagediv2');
        // ****************ADD PRODUCT NAME****************
        productId = res.productId
        productName = res.name
        $(".product2").text(productName)
        // ****************ADD PRODUCT COST****************
        productCost = res.cost
        $(".cost2").text(productCost)
        console.log(productCost, productId, productName)



        // ***********PRODUCT3***********
        res = productData[2]
        // ****************ADD IMAGE****************
        url = res.image
        addImage(url)
        img.appendTo('#imagediv3');
        // ****************ADD PRODUCT NAME****************
        productId = res.productId
        productName = res.name
        $(".product3").text(productName)
        // ****************ADD PRODUCT COST****************
        productCost = res.cost
        $(".cost3").text(productCost)
        console.log(productCost, productId, productName)



        // ***********PRODUCT4***********
        res = productData[3]
        // ****************ADD IMAGE****************
        url = res.image
        addImage(url)
        img.appendTo('#imagediv4');
        // ****************ADD PRODUCT NAME****************
        productId = res.productId
        productName = res.name
        $(".product4").text(productName)
        // ****************ADD PRODUCT COST****************
        productCost = res.cost
        $(".cost4").text(productCost)
        console.log(productCost, productId, productName)

    })
})
function addImage(url) {
    var img = $('<img id="dynamic">');
    img.attr('src', url);
    img.attr('class', "card-img-top image")
}
