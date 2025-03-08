const menu = document.querySelector('#mobile-menu');
const menuItems = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
let isMenuActive = false;

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuItems.classList.toggle('active');
    isMenuActive = menu.classList.contains('is-active');
})

navLinks.forEach(link => {
    link.addEventListener('click', function(){
        menu.classList.remove('is-active');
        menuItems.classList.remove('active');
        isMenuActive = false;
    })
})

var lastScrollTop = 0;
var navbar = document.getElementById("navbar");
window.addEventListener("scroll", function(){
    if (isMenuActive) return;
    
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop){
        navbar.style.top="-180px";
    }else{
        navbar.style.top="0";
    }
    lastScrollTop = scrollTop;
});


document.querySelectorAll('.quantity').forEach(quantityContainer => {
    const valueIncrease = quantityContainer.querySelector('.increase');
    const valueDecrease = quantityContainer.querySelector('.decrease');
    const quantityInput = quantityContainer.querySelector('.quantity-input');

    valueIncrease.addEventListener('click', function() {
        let currentValue = parseInt(quantityInput.value);
        if (currentValue < quantityInput.max) {
            quantityInput.value = currentValue + 1;
        }
    });

    valueDecrease.addEventListener('click', function() {
        let currentValue = parseInt(quantityInput.value);
        if (currentValue > quantityInput.min) {
            quantityInput.value = currentValue - 1;
        }
    });
});
 
