const scrollLock = require ('scroll-lock/dist/scroll-lock.min.js');

function getStickyHeader(){
	let windowWidth = $(window).width(),
			headerHeight = $('header').outerHeight() + $('nav').outerHeight(),
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;

	if (scrollTop >= headerHeight) {
		$('nav.navbar').addClass('sticky-top');
	} else {
		$('nav.navbar').removeClass('sticky-top');
	}
}

function menuHover(){
	$('.navbar-nav > .nav-item').hoverIntent({
		over: function (){
			$(this).addClass('active');
			$('body').addClass('menu-open');
		}, 
		out: function (){
			$('.navbar-nav > .nav-item').removeClass('active');
			$('body').removeClass('menu-open');
		},
		timeout: 50
	});
}

function navbarIconsHover(){
	$('.navbar-icons > .nav-item').hoverIntent({
		over: function (){
			$(this).addClass('active');
			$('body').addClass('menu-icons-open');
		}, 
		out: function (){
			$('.navbar-icons > .nav-item').removeClass('active');
			$('body').removeClass('menu-icons-open');
		},
		timeout: 50
	});
}

function getSigninType(){
	$('[name="signin-radio"]').on('change', function(){
		switch($(this).val()) {
			case 'phone':
				$('.form-group--phone').show();
				$('.form-group--email').hide();
				break;
			case 'email':
				$('.form-group--phone').hide();
				$('.form-group--email').show();
				break;
		}
	});
}

function clearAllOpenCategoryMobileMenu() {
	$('.nav-list--active').each(function(){
		$(this).removeClass('nav-list--active')
	});
	$('.nav-item--active').each(function(){
		$(this).removeClass('nav-item--active')
	});
	$('.nav-list').removeClass('show');
}

$(document).ready(function(){

	
	
	// City panel
	/*
	$('body').on('click', function(e){
		e.preventDefault;
		if (e.target.closest('.header-item--city .header-item-title')) {
			$('body').addClass("city-panel-open");
		} else if (e.target.closest('.city-panel-close') || !(e.target.closest('.city-panel'))) {
			$('body').removeClass("city-panel-open");
		}
	});
	*/

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

	
	if( $(window).width() > 415 ) {

		// Menu hover intent
		menuHover();
	
		// Navbar-icons hover intent
		navbarIconsHover();

	}
	
	
	
	
	// Change sign in type
	getSigninType();

	
	// Eye for password
	$('.input-group-append--eye').on({
		mouseenter: function() {
			$('#signin-password').attr('type', 'text');
		},
		mouseleave: function() {
			$('#signin-password').attr('type', 'password');
		}
	});


	$('.btn').on('click', function(e){
		e.preventDefault();
		if (!$(this).hasClass('progress-bar-striped')) {
			$(this).addClass('progress-bar-striped progress-bar-animated');
		} else {
			$(this).removeClass('progress-bar-striped progress-bar-animated');
		}
	});




	// MOBILE

	if( $(window).width() < 415 ) {
		
		
		// Mobile search
		$('.nav-item-search .nav-link').on('click', function(){
			$('body').toggleClass('search-open')
			scrollLock.disablePageScroll();;
		});
		$('.navbar-form-close').on('click', function(){
			$('body').removeClass('search-open');
			scrollLock.enablePageScroll();
		});

		// Mobile header features carousel
		//$('.header').find('.header-item--phone, .header-item--city').remove();
		/* $('.header .container-fluid').addClass('owl-carousel owl-theme-mobile-header-features').owlCarousel({
			loop: true,
			autoplay: false,
			mouseDrag: true,
			touchDrag: true,
			dots: false,
			nav: true,
			items: 1,
			lazyLoad: true,
			navText: [
				'<svg version="1.1" id="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="64px" height="64px" viewBox="0 0 64 64" enable-background="new 0 0 64 64"><polygon fill="" points="36.238,44.061 24.271,32.226 36.156,20.115 37.996,21.918 27.907,32.199 38.05,42.229 "/></svg>', 
				'<svg version="1.1" id="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="64px" height="64px" viewBox="0 0 64 64" enable-background="new 0 0 64 64"><polygon fill="" points="36.238,44.061 24.271,32.226 36.156,20.115 37.996,21.918 27.907,32.199 38.05,42.229 "/></svg>'
			]
		});
	 */

		// Mobile menu

		

		$('.hamburger').on('click', function(){

			if ($(this).hasClass('is-active')) {
				$(this).removeClass('is-active');
				
				// Включение прокрутки
				scrollLock.enablePageScroll();
				
			} else {
				$(this).addClass('is-active');
				
				// Выключение прокрутки
				scrollLock.disablePageScroll($('.navbar-nav'));
			}

			$('body').toggleClass('mobile-menu-open');

			let $root_nav_bar = $('.navbar-nav');
			
			if ($root_nav_bar.hasClass('navbar-nav--active')) {
				$root_nav_bar.removeClass('navbar-nav--active');
				$('.nav-wrap').removeClass('show');
				clearAllOpenCategoryMobileMenu();
			} else {
				
			}

		});

		$('.nav-link--expand').on('click', function(){
			$(this).closest('.nav-list').toggleClass('nav-list--active');
			$(this).closest('.nav-item').toggleClass('nav-item--active');
			$(this).next().toggleClass('show');
		});

		$('.nav-link--expand--root').on('click', function(){
			let $root_nav_bar = $(this).closest('.navbar-nav');
			if ($root_nav_bar.hasClass('navbar-nav--active')) {
				$root_nav_bar.removeClass('navbar-nav--active');
				clearAllOpenCategoryMobileMenu();
			} else {
				$root_nav_bar.addClass('navbar-nav--active');
			}
		});

		// Close menu after open modal
		$('#city, #signin').on('shown.bs.modal', function () {
			$('body').removeClass('mobile-menu-open');
			$('.navbar-nav').removeClass('navbar-nav--active');
			$('.nav-wrap').removeClass('show');
			clearAllOpenCategoryMobileMenu();
			$('.hamburger').removeClass('is-active');
			scrollLock.enablePageScroll();
		});
	
		// END Mobile menu
	}


});

$(window).on('scroll', function(event){
  //getStickyHeader();
});

