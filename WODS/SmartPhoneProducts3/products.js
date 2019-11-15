// Create products array and add items to it
let products = [];
products.push({
    name: "HTC",
    price: 40.00,
    img: "http://dport96.github.io/ITM352/morea/080.flow-control-II/HTC.jpg"
});
products.push({
    name: "Apple",
    price: 75.00,
    img: "http://dport96.github.io/ITM352/morea/080.flow-control-II/iphone-3gs.jpg"
});
products.push({
    name: "Nokia",
    price: 35.00,
    img: "http://dport96.github.io/ITM352/morea/080.flow-control-II/Nokia.jpg"
});
products.push({
    name: "Samsung",
    price: 45.00,
    img: "http://dport96.github.io/ITM352/morea/080.flow-control-II/Samsung.jpg"
});
products.push({
    name: "Blackberry",
    price: 10.00,
    img: "http://dport96.github.io/ITM352/morea/080.flow-control-II/Blackberry.jpg"
});
// Loop each item in products and write the section
for (let i = 0; i < products.length; i++) {
    document.write(`
    <section class="item">
        <h2>${products[i].name}</h2>
        <p>$${products[i].price}</p>
        <img src="${products[i].img}">
    </section>
    `);
}
