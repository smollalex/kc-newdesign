/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/desktop/pages/chc.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/desktop/layout/footer.js":
/*!*****************************************!*\
  !*** ./src/js/desktop/layout/footer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


$(document).ready(function () {

	$('[name="subscribe-gender"], [name="subscribe-confirm"]').on('click', function () {
		$('[name="subscribe-gender"]').removeAttr('checked');
		$(this).attr('checked', 'checked');
	});
	$('[name="subscribe-confirm"]').on('click', function () {
		$(this).attr('checked', !$(this).attr('checked'));
	});
});

/***/ }),

/***/ "./src/js/desktop/layout/header.js":
/*!*****************************************!*\
  !*** ./src/js/desktop/layout/header.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function getStickyHeader() {
	var windowWidth = $(window).width(),
	    headerHeight = $('header').outerHeight() + $('nav').outerHeight(),
	    scrollTop = window.pageYOffset || document.documentElement.scrollTop;

	if (scrollTop >= headerHeight) {
		$('nav.navbar').addClass('sticky-top');
	} else {
		$('nav.navbar').removeClass('sticky-top');
	}
}

function menuHover() {
	$('.navbar-nav > .nav-item').hoverIntent({
		over: function over() {
			if ($(this).find('.nav-wrap').length) {
				$('.navbar-overlay').first().show();
			}
			$(this).addClass('active');
			//$('body').addClass('menu--opened');
		},
		out: function out() {
			if ($(this).find('.nav-wrap').length) {
				$('.navbar-overlay').first().hide();
			}
			$('.navbar-nav > .nav-item').removeClass('active');
			//$('body').removeClass('menu--opened');
		},
		timeout: 50
	});
}

$(document).ready(function () {

	// City panel
	$('body').on('click', function (e) {
		e.preventDefault;
		if (e.target.closest('.header-item--city .header-item-title')) {
			$('body').addClass("city-panel--opened");
		} else if (e.target.closest('.city-panel-close') || !e.target.closest('.city-panel')) {
			$('body').removeClass("city-panel--opened");
		}
	});

	// Header items
	/* 
 	$('.header-item').hover(function(){
 	$(this).addClass('header-item--active');
 },function(){
 	$(this).removeClass('header-item--active');
 });
 */

	// Sticky header
	// getStickyHeader();

	// Menu hover intent
	menuHover();
});

$(window).on('scroll', function (event) {
	//getStickyHeader();
});

/***/ }),

/***/ "./src/js/desktop/pages/chc.js":
/*!*************************************!*\
  !*** ./src/js/desktop/pages/chc.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../layout/header */ "./src/js/desktop/layout/header.js");
__webpack_require__(/*! ../layout/footer */ "./src/js/desktop/layout/footer.js");

$(document).ready(function () {
  console.log('ff');
  $('select').select2();
});

/***/ })

/******/ });
//# sourceMappingURL=chc.js.map