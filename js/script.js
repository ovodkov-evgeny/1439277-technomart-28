// Order Form

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
    if (modalOrder.classList.contains("modal-show") || modalMap.classList.contains("modal-show")) {
      evt.preventDefault();
      modalOrder.classList.remove("modal-show");
      modalOrder.classList.remove("modal-error");
      modalMap.classList.remove("modal-show");
    }
  }
});


// Map

var mapLink = document.querySelector(".contacts-map");
var modalMap = document.querySelector(".modal-map");
var mapClose = modalMap.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalMap.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalMap.classList.remove("modal-show");
});

// Slider

var btnLeft = document.querySelector(".slider-to-left");
var btnRight = document.querySelector(".slider-to-right");
var slides = document.querySelectorAll(".slide");
var paginations = document.querySelectorAll(".slider-pagination-btn");


btnRight.addEventListener("click", function (evt) {
  evt.preventDefault();
  changeSlide();
});

btnLeft.addEventListener("click", function (evt) {
  evt.preventDefault();
  changeSlide();
});

function changeSlide() {
  slides.forEach(element => {
    element.classList.toggle("is-show");
  });
  paginations.forEach(element => {
    element.classList.toggle("pagination-active");
  });
};

// Services

var serviceListDelivery = document.querySelector(".service-list-delivery");
var serviceListQuarantee = document.querySelector(".service-list-quarantee");
var serviceListCredit = document.querySelector(".service-list-credit");
var serviceItemDelivery = document.querySelector(".service-delivery");
var serviceItemQuarantee = document.querySelector(".service-quarantee");
var serviceItemCredit = document.querySelector(".service-credit");

// var serviceList = document.querySelectorAll(".services-list-item");

// serviceList.forEach(element => {
//   element.addEventListener("click", function() {
//     this.classList.toggle("is-active");
//     for (let i = 0; i < serviceList.length; i++) {


//     }
//   });
// });

serviceListDelivery.addEventListener("click", function() {
  serviceListDelivery.classList.add("is-active");
  serviceListQuarantee.classList.remove("is-active");
  serviceListCredit.classList.remove("is-active");
  serviceItemDelivery.classList.add("is-show");
  serviceItemQuarantee.classList.remove("is-show");
  serviceItemCredit.classList.remove("is-show");
});

serviceListQuarantee.addEventListener("click", function() {
  serviceListDelivery.classList.remove("is-active");
  serviceListQuarantee.classList.add("is-active");
  serviceListCredit.classList.remove("is-active");
  serviceItemDelivery.classList.remove("is-show");
  serviceItemQuarantee.classList.add("is-show");
  serviceItemCredit.classList.remove("is-show");
});

serviceListCredit.addEventListener("click", function() {
  serviceListDelivery.classList.remove("is-active");
  serviceListQuarantee.classList.remove("is-active");
  serviceListCredit.classList.add("is-active");
  serviceItemDelivery.classList.remove("is-show");
  serviceItemQuarantee.classList.remove("is-show");
  serviceItemCredit.classList.add("is-show");
});
