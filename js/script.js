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

function orderOpenHandler(evt) {
  evt.preventDefault();
  modalOrder.classList.remove("visually-hidden");
  modalOrder.classList.add("modal-animation");

  if (storage) {
    orderName.value = storage;
    orderEmail.focus();
  } else {
    orderName.focus();
  }
}

function orderCloseHandler(evt) {
  evt.preventDefault();
  modalOrder.classList.add("visually-hidden");
  modalOrder.classList.remove("modal-animation");
  modalOrder.classList.remove("modal-error");
}

contactLink.addEventListener("click", orderOpenHandler);
orderClose.addEventListener("click", orderCloseHandler);

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

// window.addEventListener("keydown", function (evt) {
//   if (evt.keyCode === 27) {
//     if (modalOrder.classList.contains("modal-show") || modalMap.classList.contains("modal-show")) {
//       evt.preventDefault();
//       modalOrder.classList.remove("modal-show");
//       modalOrder.classList.remove("modal-error");
//       modalMap.classList.remove("modal-show");
//     }
//   }
// });


// Map

var mapLink = document.querySelector(".contacts-map");
var modalMap = document.querySelector(".modal-map");
var mapClose = modalMap.querySelector(".modal-close");

var KEY_ENTER = 13;
var KEY_ESC = 27;

ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map(document.querySelector(".modal-map"), {
      center: [59.938635, 30.323118],
      zoom: 18
  });

  myMap.geoObjects.add(new ymaps.Placemark([59.93875, 30.323118],{},
    {
      preset: 'islands#dotIcon',
      iconColor: '#EE3643'
    }));
}

function mapOpenHandler(evt) {
    evt.preventDefault();
    modalMap.classList.remove("visually-hidden");
}

function mapCloseHandler(evt) {
    evt.preventDefault();
    modalMap.classList.add("visually-hidden");
}

mapLink.addEventListener("click", mapOpenHandler);
mapClose.addEventListener("click", mapCloseHandler);

mapLink.addEventListener("keydown", function (evt) {
  if (evt.keyCode === KEY_ENTER) {
      mapOpenHandler(evt);
  }
});

mapClose.addEventListener("keydown", function (evt) {
  if (evt.keyCode === KEY_ESC) {
      mapCloseHandler(evt);
  }
});
// mapLink.addEventListener("click", function (evt) {
//   evt.preventDefault();
//   modalMap.classList.remove("visually-hidden");
// });

// mapClose.addEventListener("click", function (evt) {
//   evt.preventDefault();
//   modalMap.classList.add("visually-hidden");
// });

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
    element.classList.toggle("visually-hidden");
  });
  paginations.forEach(element => {
    element.classList.toggle("pagination-active");
  });
};

// Services

var serviceItemDelivery = document.querySelector(".service-delivery");
var serviceItemQuarantee = document.querySelector(".service-quarantee");
var serviceItemCredit = document.querySelector(".service-credit");
var serviceListItems = document.querySelectorAll(".services-list-item");
var serviceListCount = serviceListItems.length - 1;
var serviceItems = document.querySelectorAll(".service-item");
var serviceItemsCount = serviceItems.length - 1;

function removeIsActiveTabClass() {

    for (var i = 0; i <= serviceListCount; i++ ) {
       serviceListItems[i].classList.remove("is-active");
    }
}

function addVisuallyHiddenToServiceItems() {

    for (let index = 0; index <= serviceItemsCount; index++) {
      serviceItems[index].classList.add("visually-hidden");
    }
}

for (var j = 0; j <= serviceListCount; j++ ) {

  serviceListItems[j].addEventListener("click", function(evt) {
      removeIsActiveTabClass();
      evt.target.classList.add("is-active");

      if (evt.target.classList.contains("service-list-delivery")) {
        addVisuallyHiddenToServiceItems();
        serviceItemDelivery.classList.remove("visually-hidden");
      }

      if (evt.target.classList.contains("service-list-quarantee")) {
        addVisuallyHiddenToServiceItems();
        serviceItemQuarantee.classList.remove("visually-hidden");
      }

      if (evt.target.classList.contains("service-list-credit")) {
        addVisuallyHiddenToServiceItems();
        serviceItemCredit.classList.remove("visually-hidden");
      }
  });
}

// Modal add to cart

var buyLinks = document.querySelectorAll(".button-buy");
var buyLinksCount = buyLinks.length - 1;
var modalAdd = document.querySelector(".modal-add");

buyLinks.forEach(element => {
  element.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalAdd.classList.remove("visually-hidden");
  });
});

