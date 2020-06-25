var contactLink = document.querySelector(".contact-us");
var modalOrder = document.querySelector(".modal-order");
var orderForm = modalOrder.querySelector(".order-form");
var orderClose = modalOrder.querySelector(".modal-close");
var orderName = modalOrder.querySelector(".order-form-name");
var orderEmail = modalOrder.querySelector(".order-form-email");
var orderMessage = modalOrder.querySelector('.order-form-message');

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

contactLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalOrder.classList.add("modal-show");

  if (storage) {
    orderName.value = storage;
    orderEmail.focus();
  } else {
    orderName.focus();
  }

  orderName.focus();
});

orderClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalOrder.classList.remove("modal-show");
  modalOrder.classList.remove("modal-error");
});

orderForm.addEventListener("submit", function(evt) {
  if (!orderName.value || !orderEmail.value || !orderMessage.value) {
    evt.preventDefault();
    modalOrder.classList.remove("modal-error");
    modalOrder.offsetWidth = modalOrder.offsetWidth;
    modalOrder.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", orderName.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalOrder.classList.contains("modal-show")) {
      evt.preventDefault();
      modalOrder.classList.remove("modal-show");
      modalOrder.classList.remove("modal-error");
    }
  }
});
