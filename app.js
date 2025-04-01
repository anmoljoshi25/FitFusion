const cart = document.querySelector(".cart");
const cart_container = document.querySelector(".cart-container");
const cart_close_button = document.querySelector(".cart-close");
const menu_close_button = document.querySelector(".menu-close");
const cart_open_button = document.querySelector(".cart-section");


cart_open_button.addEventListener("click", () => {
    cart.style.display = "flex";
    setTimeout(() => {
      cart_container.style.transform = "translateX(0%)";
    }, 100);
  });
  
  cart_close_button.addEventListener("click", () => {
    cart_container.style.transform = "translateX(100%)";
    setTimeout(() => {
      cart.style.display = "none";
    }, 500);
  });



  document.addEventListener("DOMContentLoaded", function () {
    const buyNowButtons = document.querySelectorAll(".buy-now3");
    const cartContainer = document.querySelector(".products-collection");
    const removeAllButton = document.querySelector(".remove-items-from-cart");
    const grandTotalElement =document.querySelector(".grand_total"); 
    grandTotalElement.textContent = "Total: $0";
    cartContainer.appendChild(grandTotalElement);
    
    let grandTotal = 0;
    
    buyNowButtons.forEach(button => {
        button.addEventListener("click", function () {
            let productBox = this.closest(".box");
            let productImage = productBox.querySelector(".box-img").src;
            let price = Math.floor(Math.random() * 50) + 10; // Random price for demo
            
            let existingCartItem = [...cartContainer.querySelectorAll(".cart-item")].find(item => 
                item.querySelector(".cart-product-img").src === productImage);
            
            if (existingCartItem) {
                let quantityElement = existingCartItem.querySelector(".quantity");
                let quantity = parseInt(quantityElement.textContent);
                quantity++;
                quantityElement.textContent = quantity;
                updateTotal(price);
            } else {
                let cartItem = document.createElement("div");
                cartItem.classList.add("cart-item");
                cartItem.innerHTML = `
                    <div class="cart-product">
                        <img src="${productImage}" class="cart-product-img" alt="Product" style="width: 200px; height: 200px; object-fit: cover;">
                        <span class="product-price">$${price}</span>
                        <button class="decrement">-</button>
                        <span class="quantity">1</span>
                        <button class="increment">+</button>
                        <button class="remove-item">Remove</button>
                    </div>
                `;
                
                cartContainer.insertBefore(cartItem, grandTotalElement);
                updateTotal(price);

                let quantityElement = cartItem.querySelector(".quantity");
                let incrementButton = cartItem.querySelector(".increment");
                let decrementButton = cartItem.querySelector(".decrement");
                let removeButton = cartItem.querySelector(".remove-item");

                incrementButton.addEventListener("click", function () {
                    let quantity = parseInt(quantityElement.textContent);
                    quantity++;
                    quantityElement.textContent = quantity;
                    updateTotal(price);
                });

                decrementButton.addEventListener("click", function () {
                    let quantity = parseInt(quantityElement.textContent);
                    if (quantity > 1) {
                        quantity--;
                        quantityElement.textContent = quantity;
                        updateTotal(-price);
                    }
                });

                removeButton.addEventListener("click", function () {
                    let quantity = parseInt(quantityElement.textContent);
                    updateTotal(-price * quantity);
                    cartItem.remove();
                });
            }
        });
    });

    removeAllButton.addEventListener("click", function () {
        cartContainer.innerHTML = "";
        cartContainer.appendChild(grandTotalElement);
        grandTotal = 0;
        updateGrandTotal();
    });

    function updateTotal(amount) {
        grandTotal += amount;
        updateGrandTotal();
    }

    function updateGrandTotal() {
        grandTotalElement.textContent = `Total: $${grandTotal}`;
    }
});





var main = document.querySelector(".main")
var cursor = document.querySelector("#cursor")

main.addEventListener('mousemove',function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:1,
        ease:"back.out"
    })
})


gsap.to(".page1 h1", {
    transform: "translateX(-100%)",
fontWeight: 100,
scrollTrigger: {
    trigger: ".page1",
    scroller: "body",
    // markers: true,
    start: "top 0",
    end: "top -200%",
    scrub: 2,
    pin: true
}
});


gsap.from(".page-2 .boxes",{
    scale : 0,
    opacity : 0, 
    duration : 1,
    stagger : 0.3,
    scrollTrigger :{
        trigger : ".page-2 .boxes",
        scroller : "body",
        markers : false,
        start : "top 70%"
    }

})