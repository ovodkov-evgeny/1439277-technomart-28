const KEY_ENTER = 13;
const KEY_ESC = 27;

var buyLinks = document.querySelectorAll(".button-buy");
var buyLinksCount = buyLinks.length - 1;
var modalAddToCart = document.querySelector(".modal-add");
var addToCartClose = document.querySelector(".modal-add-close");
var btnContinueShopping = document.querySelector(".continue");
var cartCount = document.querySelector(".cart-count");
var headerCart = document.querySelector(".header-cart");
var bookmarkCount = document.querySelector(".bookmark-count");
var headerBookmarks = document.querySelector(".header-bookmarks");


// Modal add to cart

function addToCartOpenHandler(evt) {
  evt.preventDefault();
  modalAddToCart.classList.remove("visually-hidden");
}

function addToCartCloseHandler(evt) {
  evt.preventDefault();
  modalAddToCart.classList.add("visually-hidden");
}

if (cartCount.textContent !== '0') {
  headerCart.classList.add("is-active");
}

if (bookmarkCount.textContent !== '0') {
  headerBookmarks.classList.add("is-active");
}

buyLinks.forEach(element => {
  element.addEventListener("click", addToCartOpenHandler);
});

addToCartClose.addEventListener("click", addToCartCloseHandler);
btnContinueShopping.addEventListener("click", addToCartCloseHandler);

btnContinueShopping.addEventListener("keydown", function(evt) {
  if (evt.keyCode === KEY_ENTER) {
    if (modalAddToCart.classList.contains("visually-hidden")) {
      addToCartOpenHandler(evt);
    }
  }
});

buyLinks.forEach(element => {
  element.addEventListener("keydown", function (evt) {
    if (evt.keyCode === KEY_ENTER) {
      if (modalAddToCart.classList.contains("visually-hidden")) {
        addToCartOpenHandler(evt);
      }
    }
  })
});

document.addEventListener("keydown", function (evt) {
  if (evt.keyCode === KEY_ESC) {
    if (!modalAddToCart.classList.contains("visually-hidden")) {
      addToCartCloseHandler(evt);
    }
  }
});
