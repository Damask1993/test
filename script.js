const menu = document.querySelector('#mobile-menu');
const menuItems = document.querySelector('.nav-menu');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuItems.classList.toggle('active');
})