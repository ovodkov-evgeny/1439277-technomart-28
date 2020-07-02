const KEY_ENTER = 13;
const KEY_ESC = 27;

var orderLink = document.querySelector(".contact-us");
var modalOrder = document.querySelector(".modal-order");
var orderForm = document.querySelector(".order-form");
var orderClose = document.querySelector(".order-close");
var orderName = document.querySelector(".order-form-name");
var orderEmail = document.querySelector(".order-form-email");
var orderMessage = document.querySelector('.order-form-message');

var isStorageSupport = true;
var storage = "";

var mapLink = document.querySelector(".contacts-map");
var modalMap = document.querySelector(".modal-map");
var mapClose = document.querySelector(".map-close");

var btnLeft = document.querySelector(".slider-to-left");
var btnRight = document.querySelector(".slider-to-right");
var slides = document.querySelectorAll(".slide");
var paginations = document.querySelectorAll(".slider-pagination-btn");

var serviceItemDelivery = document.querySelector(".service-delivery");
var serviceItemQuarantee = document.querySelector(".service-quarantee");
var serviceItemCredit = document.querySelector(".service-credit");
var serviceListItems = document.querySelectorAll(".services-list-item");
var serviceListCount = serviceListItems.length - 1;
var serviceItems = document.querySelectorAll(".service-item");
var serviceItemsCount = serviceItems.length - 1;


// Order Form

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

document.addEventListener("keydown", function (evt) {
  if (evt.keyCode === KEY_ESC) {
    if (!modalOrder.classList.contains("visually-hidden")) {
      orderCloseHandler(evt);
    }
  }
});

orderLink.addEventListener("keydown", function (evt) {
  if (evt.keyCode === KEY_ENTER) {
    if (modalOrder.classList.contains("visually-hidden")) {
      orderOpenHandler(evt);
    }
  }
});

orderLink.addEventListener("click", orderOpenHandler);
orderClose.addEventListener("click", orderCloseHandler);

// Map

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


mapLink.addEventListener("keydown", function (evt) {
  if (evt.keyCode === KEY_ENTER) {
    if (modalMap.classList.contains("visually-hidden")) {
      mapOpenHandler(evt);
    }
  }
});

document.addEventListener("keydown", function (evt) {
  if (evt.keyCode === KEY_ESC) {
    if (!modalMap.classList.contains("visually-hidden")) {
      mapCloseHandler(evt);
    }
  }
});

mapLink.addEventListener("click", mapOpenHandler);
mapClose.addEventListener("click", mapCloseHandler);
ymaps.ready(init);

// Slider

function changeSlide() {
  slides.forEach(element => {
    element.classList.toggle("visually-hidden");
  });
  paginations.forEach(element => {
    element.classList.toggle("pagination-active");
  });
};

btnRight.addEventListener("click", function (evt) {
  evt.preventDefault();
  changeSlide();
});

btnLeft.addEventListener("click", function (evt) {
  evt.preventDefault();
  changeSlide();
});

// Services

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





