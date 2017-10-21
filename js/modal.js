var link = document.querySelector(".feedback-button");
var popup = document.querySelector(".modal__true");
var close = document.querySelector(".modal-close");

link.addEventListener("click", function(evt){
  evt.preventDefault();
  popup.classList.add("modal-show");
});
close.addEventListener("click", function(evt){
  evt.preventDefault();
  popup.classList.remove("modal-show");
});
window.addEventListener("keydown", function(evt){
  if (evt.keyCode === 27 && popup.classList.contains("modal-show")){
    popup.classList.remove("modal-show");
  }
});
