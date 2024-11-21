

// access the Dom by Id/elements

let items = document.querySelectorAll(".list-menu li a");
let nav = document.querySelector(".navbar h1 ");

nav.addEventListener('mouseover' , () =>{
    nav.style.color = "black" ;
});
nav.addEventListener('mouseout' , () =>{
    nav.style.color = '' ;
});
// applying event listener.

items.forEach(item => {
    item.addEventListener ('mouseover' ,()=>{
        item.style.color = "black" ;
    });
item.addEventListener('mouseout',()=>{
    item.style.color = '' ;
});
});
// Get references to the menu icon and the menu list
const menuIcon = document.getElementById('menu-icon');
const menuList = document.getElementById('menu-list');

menuIcon.addEventListener('click', () => {
    menuList.classList.toggle('show-menu');
    menuList.style.display = menuList.classList.contains('show-menu') ? 'flex' : 'none';
});

menuIcon.addEventListener('click', () => {
    menuList.classList.toggle('active');
});



