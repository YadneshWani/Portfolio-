console.log("Hello World...!!!");
alert("Script loaded...");
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if(navToggle)
{
    navToggle.addEventListener('click',()=>{
        console.log("Clicked...");
        navMenu.classList.add("show-menu");
    })
}
if(navClose)
{
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu');
    })
}
