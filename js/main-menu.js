var link = document.querySelector(".main-nav__toggle");
var popup = document.querySelector(".main-menu");
var listLeft = document.querySelector(".site-list--left");
var listRight = document.querySelector(".site-list--right");
var listClose = document.querySelector(".site-list--closed");

link.addEventListener("click", function(evt){
  evt.preventDefault();
  if (popup.classList.contains("main-menu--opend")){
    popup.classList.remove("main-menu--opend");
    popup.classList.add("main-menu--closed");
    listLeft.classList.add("site-list--closed");
    listRight.classList.add("site-list--closed");
  }
  else {
    popup.classList.remove("main-menu--closed");
    popup.classList.add("main-menu--opend");
    listLeft.classList.remove("site-list--closed");
    listRight.classList.remove("site-list--closed");
  }
});
