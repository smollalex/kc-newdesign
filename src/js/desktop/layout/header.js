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
			if ($(this).find('.nav-wrap').length) {
				$('.navbar-overlay').first().show();
			}
			$(this).addClass('active');
			//$('body').addClass('menu--opened');
		}, 
		out: function (){
			if ($(this).find('.nav-wrap').length) {
				$('.navbar-overlay').first().hide();
			}
			$('.navbar-nav > .nav-item').removeClass('active');
			//$('body').removeClass('menu--opened');
		},
		timeout: 50
	});
}

$(document).ready(function(){

	// City panel
	$('body').on('click', function(e){
		e.preventDefault;
		if (e.target.closest('.header-item--city .header-item-title')) {
			$('body').addClass("city-panel--opened");
		} else if (e.target.closest('.city-panel-close') || !(e.target.closest('.city-panel'))) {
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


 
$(window).on('scroll', function(event){
  //getStickyHeader();
});

