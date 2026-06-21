const items = [
{name:"Stone Stud Earring",price:150,image:"e1.jpg"},
{name:"Pearl Earring",price:399,image:"e2.jpg"},
{name:"Gold Plated Earring",price:450,image:"e3.jpg"},
{name:"Designer Earring",price:499,image:"e4.jpg"},
{name:"Traditional Earring",price:550,image:"e5.jpg"},
{name:"Gold Necklace",price:750,image:"n1.jpg"},
{name:"Pearl Necklace",price:600,image:"n2.jpg"},
{name:"Temple Necklace",price:700,image:"n3.jpg"},
{name:"Chain Necklace",price:500,image:"n4.jpg"},
{name:"Designer Necklace",price:700,image:"n5.jpg"}
];

let cart = [];

const itemsDiv = document.getElementById("items");

function renderItems(products = items){

itemsDiv.innerHTML = "";

products.forEach((item,index)=>{

itemsDiv.innerHTML += `
<div class="card">

<img src="images/${item.image}" alt="${item.name}">

<h3>${item.name}</h3>

<p>₹${item.price}</p>

<button class="buy-btn"
onclick="addToCart(${items.indexOf(item)})">
Add To Cart
</button>

</div>
`;
});
}

function addToCart(index){
cart.push(items[index]);
renderCart();
}

function renderCart(){

const cartItems =
document.getElementById("cartItems");

const total =
document.getElementById("total");

cartItems.innerHTML = "";

let sum = 0;

cart.forEach((item,i)=>{

cartItems.innerHTML += `
<div class="cart-item">
${item.name} - ₹${item.price}
<button onclick="removeItem(${i})">❌</button>
</div>
`;

sum += item.price;
});

total.innerText = sum;
}

function removeItem(index){
cart.splice(index,1);
renderCart();
}

function sendWhatsApp(){

if(cart.length===0){
alert("Cart is empty");
return;
}

let message =
"Hello, I want to order:%0A%0A";

let totalPrice = 0;

cart.forEach(item=>{
message +=
`${item.name} - ₹${item.price}%0A`;
totalPrice += item.price;
});

message +=
`%0ATotal Amount = ₹${totalPrice}`;

window.open(
`https://wa.me/919400746548?text=${message}`
);
}

function searchProducts(){

let input =
document.getElementById("searchInput")
.value.toLowerCase();

let filtered =
items.filter(item =>
item.name.toLowerCase()
.includes(input));

renderItems(filtered);
}

renderItems();