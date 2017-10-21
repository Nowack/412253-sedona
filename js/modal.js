var link = document.querySelector(".feedback__button");
var popup = document.querySelector(".modal__true");
var popupFalse = document.querySelector(".modal__false");
var close = document.querySelector(".modal__close");

link.addEventListener("click", function(evt){
  evt.preventDefault();
  popup.classList.add("modal__show");
});
close.addEventListener("click", function(evt){
  evt.preventDefault();
  popup.classList.remove("modal__show");
});
window.addEventListener("keydown", function(evt){
  if (evt.keyCode === 27 && popup.classList.contains("modal__show")){
    popup.classList.remove("modal__show");
  }
});
