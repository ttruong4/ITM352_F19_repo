/*Terrance Truong, 11/12/19*/
/* products array, listing all my products prices and corresponding images*/
products = [
    {
        "product": "Deku Funko Pop",
        "price": 10.00,
        "image": "Deku.jpg"
    },
    {
        "product": "Todoroki Funko Pop",
        "price": 25.00,
        "image": "Todoroki.jpg"
    },
    {
        "product": "Bakugo Funko Pop",
        "price": 15.00,
        "image": "Bakugo.jpg"
    },
    {
        "product": "Ochako Funko Pop",
        "price": 20.00,
        "image": "Ochako.jpg"
    },
    {
        "product": "All Might Funko Pop",
        "price": 50.00,
        "image": "All_Might.jpg"
    }
];

if (typeof module != 'undefined') {
    module.exports.products = products;
}
