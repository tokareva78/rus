/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/_components.js":
/*!*******************************!*\
  !*** ./src/js/_components.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_settings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/settings.js */ "./src/js/components/settings.js");
/* harmony import */ var _components_settings_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_settings_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_preloader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/preloader.js */ "./src/js/components/preloader.js");
/* harmony import */ var _components_preloader_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_preloader_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header.js */ "./src/js/components/header.js");
/* harmony import */ var _components_header_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_header_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_tabs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/tabs.js */ "./src/js/components/tabs.js");
/* harmony import */ var _components_tabs_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_tabs_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_modals_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/modals.js */ "./src/js/components/modals.js");
/* harmony import */ var _components_modals_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_modals_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_accordion_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/accordion.js */ "./src/js/components/accordion.js");
/* harmony import */ var _components_accordion_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_accordion_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_form_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/form.js */ "./src/js/components/form.js");
/* harmony import */ var _components_form_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_form_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_swiper_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/swiper.js */ "./src/js/components/swiper.js");
/* harmony import */ var _components_swiper_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_swiper_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_review_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/review.js */ "./src/js/components/review.js");
/* harmony import */ var _components_review_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_components_review_js__WEBPACK_IMPORTED_MODULE_8__);









// import './components/faqs.js';
// import './components/faqs.js';
// import './components/faqs.js';
// import './components/faqs.js';

/***/ }),

/***/ "./src/js/components/accordion.js":
/*!****************************************!*\
  !*** ./src/js/components/accordion.js ***!
  \****************************************/
/***/ (function() {

// Получаем все элементы аккордеона
const accordions = document.querySelectorAll('._accordion');

// Добавляем класс 'open' к первым элементам каждого аккордеона
accordions.forEach(accordion => {
  const accordionItems = accordion.querySelectorAll('._accordionItem');

  // Если нужно изначально все вопросы скрыть, то уберите этот код
  if (accordionItems.length > 0) {
    const firstItem = accordionItems[0];
    const wrapper = firstItem.querySelector('._accordionWrapper');
    const btn = firstItem.querySelector('._accordionBtn');
    const content = firstItem.querySelector('._accordionContent');
    wrapper.classList.add('open');
    btn.classList.add('open');
    content.classList.add('open');
  }

  // Добавляем обработчик событий на каждую кнопку аккордеона
  accordionItems.forEach(item => {
    const wrapper = item.querySelector('._accordionWrapper');
    const btn = item.querySelector('._accordionBtn');
    const content = item.querySelector('._accordionContent');
    btn.addEventListener('click', () => {
      // При клике на кнопку проверяем, есть ли у контента класс 'open'
      const isOpenWrapper = wrapper.classList.contains('open');
      const isOpen = content.classList.contains('open');
      const isOpenBtn = btn.classList.contains('open');
      // Закрываем все открытые контенты аккордеона
      accordionItems.forEach(item => {
        const itemWrapper = item.querySelector('._accordionWrapper');
        itemWrapper.classList.remove('open');
        const itemContent = item.querySelector('._accordionContent');
        itemContent.classList.remove('open');
        const itemBtn = item.querySelector('._accordionBtn');
        itemBtn.classList.remove('open');
      });

      // Если контент был закрыт, то открываем его, добавляя класс 'open'
      if (!isOpen) {
        wrapper.classList.add('open');
        content.classList.add('open');
        btn.classList.add('open');
      }
    });
  });
});

/***/ }),

/***/ "./src/js/components/form.js":
/*!***********************************!*\
  !*** ./src/js/components/form.js ***!
  \***********************************/
/***/ (function() {

if (document.querySelector('.form')) {
  document.querySelectorAll('.form').forEach(form => {
    const phoneInput = form.querySelector('._phone');
    const submitBtn = form.querySelector('._submit');

    // ================= Выпадающий список =================

    form.querySelectorAll('._selectWrapper').forEach(function (selectWrapper) {
      const selectInput = selectWrapper.querySelector('._select');
      const selectList = selectWrapper.querySelector('._select-list');
      const selectListItem = selectList.querySelectorAll('.form-select__list-item');
      const selectHidden = selectWrapper.querySelector('._select-hidden');
      selectInput.addEventListener('click', function () {
        selectList.classList.toggle('form-select__list--visible');
      });

      // Подстановка в input данных
      selectListItem.forEach(function (listItem) {
        listItem.addEventListener('click', function (e) {
          e.stopPropagation();
          selectInput.innerText = this.innerText;
          selectHidden.value = this.dataset.select;
          selectList.classList.remove('form-select__list--visible');
        });
      });

      // Кликая снаружи - закрыть список
      document.addEventListener('click', function (e) {
        if (e.target !== selectInput) {
          selectList.classList.remove('form-select__list--visible');
        }
      });

      // Нажатие на 'Tab' или 'Escape' - закрыть список
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Tab' || e.key === 'Escape') {
          selectList.classList.remove('form-select__list--visible');
        }
      });
    });

    // ================= Маска телефона и имени =================
    const mask = (dataValue, options) => {
      // создаем универсальную функцию
      const elements = document.querySelectorAll(`[data-mask="${dataValue}"]`); // ищем поля ввода по селектору с переданным значением data-атрибута
      if (!elements) return; // если таких полей ввода нет, прерываем функцию

      elements.forEach(el => {
        // для каждого из полей ввода
        IMask(el, options); // инициализируем плагин imask для необходимых полей ввода с переданными параметрами маски
      });
    };

    // Маска для номера телефона
    mask('phone', {
      mask: '+{7} (#00) 000-00-00',
      definitions: {
        '#': /[01234569]/
      },
      lazy: false
    });

    // Маска для имени
    mask('name', {
      mask: /^[А-Яа-яA-Za-z\s'-]{1,25}$/,
      lazy: false
    });

    // ================= Активная кнопка отправки =================

    // const mask = new IMask(phoneInput, {
    //   mask: "+{7} (000) 000-00-00",
    // });

    // ._submit {
    //   pointer-events: none;
    // // ._submit--active
    //   &--active {
    //     pointer-events: auto;
    //   }
    // }

    // phoneInput.addEventListener('input', phoneInputHandler);

    // function phoneInputHandler() {
    //   if (mask.masked.isComplete) {
    //     submitBtn.classList.add('_submit--active');
    //   } else {
    //     submitBtn.classList.remove('_submit--active');
    //   }
    // }

    // ================= Отправка сообщения в телеграм =================
    const TOKEN = "6569980160:AAGvLUx7Ygjx0i8LUHdi7TZWDRRmrZJcGRM";
    const CHAT_ID = "-1001970765522";
    const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      let message = `<b>Форма:</b> ${this.site.value}\n`;
      message += `<b>Имя:</b> ${this.name.value}\n`;
      message += `<b>Телефон:</b> ${this.phone.value}\n`;
      message += `<b>Как связаться:</b> ${this.social.value}`;
      axios.post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message
      }).then(res => {
        this.site.value = "";
        this.name.value = "";
        this.phone.value = "";
        this.social.value = "";
        window.location = "/thanks.html";
      }).catch(err => {
        console.warn(err);
      }).finally(() => {
        console.log('конец');
      });
    });

    // https://www.youtube.com/watch?v=RviYQrNdDok
  });
}

;

/***/ }),

/***/ "./src/js/components/header.js":
/*!*************************************!*\
  !*** ./src/js/components/header.js ***!
  \*************************************/
/***/ (function() {

// Копирование из шапки в боковое меню==================

const overlay = document.querySelector('._overlay'),
  bodyPage = document.querySelector('.page__body'),
  headerBtn = document.querySelector("._header-btn"),
  headerLogo = document.querySelector("._header-logo"),
  mobileLogo = document.querySelector("._mobile-logo"),
  headerSocial = document.querySelector("._header-socials"),
  hamburgerSlim = document.querySelector('._hamburger'),
  headerMenu = document.querySelector('._menu'),
  menu = document.querySelector('._nav'),
  navFooter = document.querySelector("._mobile-nav-footer"),
  mobileMenu = document.querySelector('._mobile-nav'),
  mobileNavMenu = document.querySelector('._mobile-nav-menu');
mobileNavMenu.appendChild(headerMenu.cloneNode(true));
mobileLogo.appendChild(headerLogo.cloneNode(true));
navFooter.appendChild(headerBtn.cloneNode(true));
navFooter.appendChild(headerSocial.cloneNode(true));

// Меню// =======================================================================

const initialMenu = () => {
  document.querySelector('.nav__list--dropdown').classList.remove('transformation');
  scrollTop();
};
const scrollTop = () => {
  menu.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
hamburgerSlim.addEventListener('click', function (event) {
  if (this.classList.contains('open')) {
    this.classList.remove('open');
    headerMenu.classList.remove('active');
    mobileMenu.classList.remove('open');
    overlay.classList.remove('open');
    bodyPage.classList.remove('lock');
  } else {
    this.classList.add('open');
    headerMenu.classList.add('active');
    mobileMenu.classList.add('open');
    overlay.classList.add('open');
    bodyPage.classList.add('lock');
    initialMenu();
  }
});
overlay.addEventListener('click', function (event) {
  if (headerMenu.classList.contains('active')) {
    hamburgerSlim.classList.remove('open');
    headerMenu.classList.remove('active');
    mobileMenu.classList.remove('open');
    overlay.classList.remove('open');
    bodyPage.classList.remove('lock');
  }
});
window.addEventListener('keydown', function (event) {
  if (headerMenu.classList.contains('active') && event.keyCode === 27) {
    hamburgerSlim.classList.remove('open');
    headerMenu.classList.remove('active');
    mobileMenu.classList.remove('open');
    overlay.classList.remove('open');
    bodyPage.classList.remove('lock');
  }
});

// Запускаем толко до 960px
// if (document.documentElement.clientWidth < 960) {
// находясь во всем меню - если кликаем на объект с классом nav__link--drop то меняем класс
mobileNavMenu.addEventListener('click', e => {
  if (e.target.classList.contains('nav__link--drop')) {
    e.preventDefault();
    // e.target.closest('.nav__list').classList.add('transformation');
    e.target.closest('.nav__item').querySelector('.nav__list--dropdown').classList.toggle('transformation');
    e.target.closest('.nav__item').querySelector('.nav__link--drop').classList.toggle('active');
    // scrollTop();
  }

  // если мы кликаем по прост ссылке, но не по дропссылке - то закрываем меню
  if (e.target.classList.contains('nav__link') && !e.target.classList.contains('nav__link--drop')) {
    // e.preventDefault();
    hamburgerSlim.classList.remove('open');
    mobileMenu.classList.remove('open');
    headerMenu.classList.remove('active');
    overlay.classList.remove('open');
    bodyPage.classList.remove('lock');
    // unlockScroll();
  }
});

/***/ }),

/***/ "./src/js/components/modals.js":
/*!*************************************!*\
  !*** ./src/js/components/modals.js ***!
  \*************************************/
/***/ (function() {

const openModalTriggers = document.querySelectorAll('[data-modal-target]');
const bodyPage = document.querySelector('.page__body');

// Открытие модального окна по [data-modal-target]
for (i = 0; i < openModalTriggers.length; i++) {
  openModalTriggers[i].addEventListener('click', function (event) {
    event.preventDefault();
    const modalId = this.getAttribute('data-modal-target');
    const modal = document.getElementById(modalId);
    const modalClose = modal.querySelector('._modalClose');

    // Проверяем, существует ли модальное окно
    if (modal) {
      modal.classList.add('modal--open');
      bodyPage.classList.add('modal-open');
    }
    // Закрытие модального окна при клике на кнопку
    modalClose.addEventListener('click', function () {
      modal.classList.remove('modal--open');
      bodyPage.classList.remove('modal-open');
    });

    // Закрытие модального окна при клике вне его области
    window.addEventListener('click', function (event) {
      if (event.target === modal) {
        modal.classList.remove('modal--open');
        bodyPage.classList.remove('modal-open');
      }
    });

    // ========Вставляем данные в модальное окно если у кнопки есть стиль ._btn ==============
    if (this.classList.contains('_btn')) {
      // Атрибуты у кнопки
      const btnAriaLabel = this.getAttribute('aria-label');
      const btnDataImg = this.getAttribute('data-img-form');

      // Атрибуты у кнопки отзыва
      const btnGrade = this.getAttribute('data-grade');
      const btnSkill = this.getAttribute('data-skill');
      const btnExam = this.getAttribute('data-exam');

      // Поиск полей в модальном окне
      const modalTitle = modal.querySelector('._modalTitle');

      // Форма
      const modalHiddenInput = modal.querySelector('._formName');
      const modalSubmitBtn = modal.querySelector('._submit');
      const modalRightImg = modal.querySelector('._modalImg');

      // Отзывы
      const modalDesc = modal.querySelector('._desc');
      if (modalDesc) {
        modalDesc.innerHTML = '';
      }

      // Задаем значения

      if (btnAriaLabel) {
        modalTitle.innerHTML = btnAriaLabel;
      }
      if (modalRightImg) {
        modalRightImg.src = btnDataImg;
      }
      if (modalHiddenInput) {
        modalHiddenInput.value = btnAriaLabel;
      }
      if (modalSubmitBtn) {
        modalSubmitBtn.textContent = this.textContent;
      }
      function blockToInsert(a, b) {
        return a.insertAdjacentHTML('afterbegin', `<span class="_exam">${b}</span>`);
      }
      if (btnExam) {
        blockToInsert(modalDesc, btnExam);
      }
      if (btnSkill) {
        blockToInsert(modalDesc, btnSkill);
      }
      if (btnGrade) {
        blockToInsert(modalDesc, btnGrade);
      }
    }
  });
}

/***/ }),

/***/ "./src/js/components/preloader.js":
/*!****************************************!*\
  !*** ./src/js/components/preloader.js ***!
  \****************************************/
/***/ (function() {

if (document.getElementById('preloader')) {
  let images = document.images,
    imagesTotalCount = images.length,
    imagesLoadedCount = 0,
    preloader = document.getElementById('preloader'),
    persDisplay = document.getElementById('percents');
  for (let i = 0; i < imagesTotalCount; i++) {
    imageClone = new Image();
    imageClone.onload = imageLoaded;
    imageClone.onerror = imageLoaded;
    imageClone.src = images[i].src;
  }
  function imageLoaded() {
    imagesLoadedCount++;
    persDisplay.innerHTML = (100 / imagesTotalCount * imagesLoadedCount << 0) + '%';
    if (imagesLoadedCount >= imagesTotalCount) {
      setTimeout(function () {
        if (!preloader.classList.contains('done')) {
          preloader.classList.add('done');
        }
      }, 600);
    }
  }
}

/***/ }),

/***/ "./src/js/components/review.js":
/*!*************************************!*\
  !*** ./src/js/components/review.js ***!
  \*************************************/
/***/ (function() {

const reviews = document.querySelectorAll('._reviews');
for (const rev of reviews) {
  const reviewImg = rev.querySelector('._revImg');
  const reviewBody = rev.querySelector('._revBody');
  const reviewBtn = rev.querySelector('._btnRev');
  reviewBtn.addEventListener('click', function (event) {
    event.preventDefault();
    const modalId = this.getAttribute('data-modal-target');
    const modal = document.getElementById(modalId);
    const modalImg = modal.querySelector('._modalImg');
    const modalBody = modal.querySelector('._modalBody');
    // console.log(modalImg);

    if (modalBody) {
      modalBody.innerHTML = reviewBody.innerHTML;
    }
    if (modalImg) {
      modalImg.innerHTML = reviewImg.innerHTML;
    }
  });
}

/***/ }),

/***/ "./src/js/components/settings.js":
/*!***************************************!*\
  !*** ./src/js/components/settings.js ***!
  \***************************************/
/***/ (function() {

// Полифил для метода forEach для NodeList (IE не читает forEach!)

if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

/***/ }),

/***/ "./src/js/components/swiper.js":
/*!*************************************!*\
  !*** ./src/js/components/swiper.js ***!
  \*************************************/
/***/ (function() {

if (true) {
  const swiperCarousel = new Swiper(".carousel", {
    grabCursor: true,
    loop: true,
    // slidesPerView: 1,
    // spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      // время задержки между слайдами
      disableOnInteraction: false // слайды будут продолжать автоматически переключаться при нажатии на кнопки навигации
    },

    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      460: {
        slidesPerView: 1.5,
        spaceBetween: 20
      },
      // 660: {
      //   slidesPerView: 1.5,
      //   spaceBetween: 20,
      // },
      768: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      1360: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  });
}

/***/ }),

/***/ "./src/js/components/tabs.js":
/*!***********************************!*\
  !*** ./src/js/components/tabs.js ***!
  \***********************************/
/***/ (function() {

if (document.querySelector("._tabs")) {
  const tabs = document.querySelectorAll("._tabs");
  tabs.forEach(elem => {
    const tabsBtn = elem.querySelectorAll("._tab-btn");
    const tabsItems = elem.querySelectorAll("._tab-content");
    tabsBtn.forEach(onTabClick);
    function onTabClick(item) {
      item.addEventListener("click", function () {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);
        if (!currentBtn.classList.contains('active')) {
          tabsBtn.forEach(function (item) {
            item.classList.remove('active');
          });
          tabsItems.forEach(function (item) {
            item.classList.remove('active');
          });
          currentBtn.classList.add('active');
          currentTab.classList.add('active');
        }
      });
    }
    elem.querySelector("._tab-btn").click();
  });
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_components */ "./src/js/_components.js");
// import './_vendor';
// import vars from './_vars';
// import './_functions';

}();
/******/ })()
;
//# sourceMappingURL=main.js.map