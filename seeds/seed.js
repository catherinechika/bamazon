const db = require("../models")
const seedData = [{
    name: "Amazonite Drop Sterling Silver Necklace",
    cost: 20,
    amount: 10,
    productId: "p1",
    image: "https://eclecticgallery.net/images/D/AMT10N-1.jpg"

}, {
    name: "Silver Ravon Dangle Necklace",
    cost: 21,
    amount: 10,
    productId: "p2",
    image: "https://images-na.ssl-images-amazon.com/images/I/81VtuZRvpjL._SL1237_.jpg"


}, {
    name: "Greek Inspired",
    cost: 22,
    amount: 10,
    productId: "p3",
    image: "https://i.etsystatic.com/13486846/r/il/e8d05f/1943071681/il_794xN.1943071681_fdg2.jpg"


}, {
    name: "Multi Stone Brown Necklace",
    cost: 23,
    amount: 10,
    productId: "p4",
    image: "https://images-na.ssl-images-amazon.com/images/I/81WzWZLRREL._SL1500_.jpg"

}, {
    name: "Amber Gold Honey Bead Necklace",
    cost: 24,
    amount: 10,
    productId: "p5",
    image: "https://dtkp6g0samjql.cloudfront.net/uploads/photo/file/7623043/gallery_hero_il_fullxfull.419882129_sn8i.jpg"


}, {
    name: "Copper and Gold Charm Bracelet",
    cost: 25,
    amount: 10,
    productId: "p6",
    image: "https://i.ebayimg.com/images/i/254198970715-0-1/s-l1000.jpg"


}, {
    name: "Cotton and Glass Bead Necklace",
    cost: 26,
    amount: 10,
    productId: "p7",
    image: "https://images1.novica.net/pictures/9/p340804_2.jpg"


}, {
    name: "Polymer Clay Focal Bead Necklace",
    cost: 27,
    amount: 10,
    productId: "p8",
    image: "https://dtkp6g0samjql.cloudfront.net/uploads/photo/file/10648768/gallery_hero_d46053b3-d4b2-4c65-981d-e5a36dc52927.jpg"


}, {
    name: "Cotton and Glass Bead Necklace",
    cost: 28,
    amount: 10,
    productId: "p9",
    image: "https://images1.novica.net/pictures/9/p340806_2_400.jpg"


}, {
    name: "Bold Nickle and Rhodium Necklace",
    cost: 29,
    amount: 10,
    productId: "p10",
    image: "https://i.ebayimg.com/images/g/tvkAAOSwMxBchJZk/s-l300.jpg"

}, {
    name: "Black Ston Wrap Boho Necklace",
    cost: 30,
    amount: 10,
    productId: "p11",
    image: "https://di2ponv0v5otw.cloudfront.net/posts/2019/05/23/5ce6efde62e9d5d5bbe602d6/m_5ce6efe32a568e3ba998950c.jpeg"


}, {
    name: "Hear Link Bracelet",
    cost: 31,
    amount: 10,
    productId: "p10",
    image: "https://images-na.ssl-images-amazon.com/images/I/71MXacnxxFL._SY500_.jpg"

}
]

db.sequelize.sync({ force: true }).then(function () {
    db.Product.bulkCreate(seedData)
        .then(function (rows) {
            console.log(`\n${rows.length} Rows Inserted`);
        })
        .catch(function (err) {
            console.log('\nError:', err);
        });
});