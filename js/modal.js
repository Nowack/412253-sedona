var form = document.querySelector(".feedback-form__form");
var popup = document.querySelector(".modal");
var popupTrue = document.querySelector(".modal--true");
var popupFalse = document.querySelector(".modal--false");
var closeTrue = document.querySelector(".modal--close-true");
var closeFalse = document.querySelector(".modal--false-false");

form.addEventListener("submit", function(evt){
  evt.preventDefault();
  popupTrue.classList.add("modal--show");
});

closeTrue.addEventListener("click", function(evt){
  evt.preventDefault();
  popupTrue.classList.remove("modal--show");
});
closeFalse.addEventListener("click", function(evt){
  evt.preventDefault();
  popupFalse.classList.remove("modal--show");
});

window.addEventListener("keydown", function(evt){
  if (evt.keyCode === 27 && popup.classList.contains("modal--show")){
    popup.classList.remove("modal--show");
  }
});
