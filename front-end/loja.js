import products from "./products.js";
let sum = 0;

function renderProducts(products) {
    const productList = document.querySelector(".products-list");
    productList.innerHTML = ""; // Limpa a lista antes de renderizar

    products.forEach((element, index) => {
        const productCard = document.createElement("li");
        productCard.classList.add("product-card");

        const productImage = document.createElement("img");
        productImage.src = element.image;
        productImage.classList.add("product-image");

        const productName = document.createElement("p");
        productName.textContent = element.name;
        productName.classList.add("product-name");

        const productPrice = document.createElement("span");
        productPrice.textContent = element.regular_price;
        productPrice.classList.add("product-price");

        const addToCartButton = document.createElement("button");
        addToCartButton.textContent = "Adicionar ao carrinho";
        addToCartButton.classList.add("add-to-cart-button");

        addToCartButton.addEventListener("click", () => { 
            addToCart(index);
            const totalQuantity = document.querySelector('.qtd-span');
            totalQuantity.innerHTML = ++sum;
        });

        productCard.appendChild(productImage);
        productCard.appendChild(productName);
        productCard.appendChild(productPrice);
        productCard.appendChild(addToCartButton);
        productList.appendChild(productCard);
    });
}

renderProducts(products);

let priceItemTotal = 0;
const cart = {};

function addToCart(i) {
    const cartList = document.querySelector(".cart-products-list");
    const messageCart = cartList.querySelector("#message-cart");

    if (messageCart) {
        messageCart.remove();
    }

    if (!cart[i]) {
        cart[i] = {
            quantity: 1,
            price: parseFloat(products[i].actual_price.replace(/[^\d.,]/g, "").replace(",", "."))
        };

        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.id = i;

        const cartItemImage = document.createElement("img");
        cartItemImage.src = products[i].image;

        const cartItemPrice = document.createElement("span");
        cartItemPrice.textContent = products[i].actual_price;
        cartItemPrice.classList.add("price-span");

        const cartItemName = document.createElement("p");
        cartItemName.textContent = products[i].name;

        const quantitySpan = document.createElement("span");
        quantitySpan.textContent = cart[i].quantity;
        quantitySpan.classList.add("quantity-span");

        const cartItemRemoveButton = document.createElement("button");
        cartItemRemoveButton.textContent = "Remover";
        cartItemRemoveButton.classList.add("remove-button-cart");

        cartItemRemoveButton.addEventListener("click", removeFromCart);

        cartItem.appendChild(cartItemImage);
        cartItem.appendChild(cartItemName);
        cartItem.appendChild(cartItemPrice);
        cartItem.appendChild(quantitySpan);
        cartItem.appendChild(cartItemRemoveButton);
        cartList.appendChild(cartItem);
    } else {
        cart[i].quantity += 1;
        const existingQuantitySpan = document.querySelector(`.cart-item[id='${i}'] .quantity-span`);
        existingQuantitySpan.textContent = cart[i].quantity;
    }

    priceItemTotal += cart[i].price;
    const totalPrice = document.querySelector(".total-price");
    totalPrice.textContent = priceItemTotal.toFixed(2);
}

function removeFromCart(event) {
    const buttonR = event.target;
    if (buttonR.classList.contains("remove-button-cart")) {
        const cartItem = buttonR.parentNode;
        const itemId = cartItem.id;

        const totalQuantity = document.querySelector('.qtd-span');

        if (cart[itemId].quantity > 1) {
            cart[itemId].quantity -= 1;
            const quantitySpan = cartItem.querySelector(".quantity-span");
            quantitySpan.textContent = cart[itemId].quantity;
            priceItemTotal -= cart[itemId].price;
            totalQuantity.innerHTML = --sum;
        } 
        else {
            priceItemTotal -= cart[itemId].price;
            totalQuantity.innerHTML = --sum;
            delete cart[itemId];
            cartItem.remove();
        }

        if (priceItemTotal < 0) {
            priceItemTotal = 0;
        }
        const totalPrice = document.querySelector(".total-price");
        totalPrice.textContent = priceItemTotal.toFixed(2);

        if (Object.keys(cart).length === 0) {
            const messageCart = document.createElement("h1");
            messageCart.id = "message-cart";
            messageCart.textContent = "O carrinho está vazio";
            const cartList = document.querySelector(".cart-products-list");
            cartList.appendChild(messageCart);
        }
    }
}

const categories = [...new Set(products.map(item => item))];

document.getElementById('searchProd').addEventListener('keyup', (e) => {
    const searchData = e.target.value.toLowerCase();
    const filteredData = categories.filter((item) => item.name.toLowerCase().includes(searchData));
    renderProducts(filteredData); // 
});

 // Renderize todos os produtos inicialmente
renderProducts(products);

// filtrar 

const filtros = document.querySelectorAll('.filter'); // Correção no seletor
filtros.forEach(botao => {
    botao.addEventListener('click', (e) => {
        const searchData = e.target.innerHTML.toLowerCase();
        const filteredCards = categories.filter((item) => item.name.toLowerCase().includes(searchData));
        renderProducts(filteredCards);
    });
});

