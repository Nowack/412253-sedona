var buttonMenuClosed = document.querySelector(".main-nav__toggle--closed");
var buttonMenuOpen = document.querySelector(".main-nav__toggle--opend");
var popup = document.querySelector(".main-nav");
var listLeft = document.querySelector(".site-list--left");
var listRight = document.querySelector(".site-list--right");

buttonMenuClosed.addEventListener("click", function(evt){
evt.preventDefault();

popup.classList.remove("main-menu--opend");
listLeft.classList.add("main-nav__list--closed");
listRight.classList.add("main-nav__list--closed");
});

buttonMenuOpen.addEventListener("click", function(evt){
evt.preventDefault();

popup.classList.add("main-menu--opend");
listLeft.classList.remove("main-nav__list--closed");
listRight.classList.remove("main-nav__list--closed");
});
