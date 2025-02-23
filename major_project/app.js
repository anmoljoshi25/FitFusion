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


