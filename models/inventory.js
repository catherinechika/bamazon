module.exports = function (sequelize, DataTypes) {
    const Product = sequelize.define("Product", {
        name: DataTypes.STRING,
        cost: DataTypes.INTEGER,
        amount: DataTypes.INTEGER,
        productId: DataTypes.STRING,
        image: DataTypes.STRING

    })

    return Product;
}