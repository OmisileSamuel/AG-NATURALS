let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onsroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

let slides = document.querySelectorAll('.home .slide');
let index = 0;

function next() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev() {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

var logoContainer = 
document.getElementById("logoContainer");
var logo = document.createElement("img");
logo.src = "image/logo.png";
logo.alt = "Logo";
logo.width = 100;
logo.height = 100;
var logoContainer =
document.getElementById("logoContainer");
logoContainer.appendChild(logo);

let cart = [];

function addToCart(productId) {
    const existingProduct = cart.find(product =>
        product.id === productId);
}
if (existingProduct) {
    existingProduct.quantity++;
} else{
    cart.push({ id: productId, quantity: 1 });
}
console.log("Product added to cart:" + productId);
console.log("Cart:", cart);
}





    