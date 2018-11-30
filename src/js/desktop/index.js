window.$ = window.jQuery = require("jquery");
require ('owl.carousel/dist/owl.carousel');

$(document).ready(function(){

	// Header items
 	$('.header-item').hover(function(){
	
		$(this).addClass('header-item--active');
		//not('.header-item--yandex')
		
	},function(){
		$(this).removeClass('header-item--active');
	});

	$('.nav-icons__counter').each(function(){
		let counter = $(this).text();
		if (counter !== "0") {
			$(this).addClass("active");
		};
	});


	// Sliders

	// Main home slider
	$('#main-slider').owlCarousel({
		loop: true,
		nav: true,
		mouseDrag: true,
		dots: true,
		items: 1,
		lazyLoad: true,
		navText: [ '<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
	});

	// Brands home slider
	$('#brands-slider').owlCarousel({
		loop: true,
		nav: true,
		mouseDrag: true,
		dots: true,
		slideBy: 5,
		lazyLoad: true,
		navText: [ '<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsive: {
			0: {
				items: 6
			},
			769: {
				items: 8
			}
		}
	});

	// New product slider
	$('#new-products-slider, #actual-discount-slider').owlCarousel({
		loop: true,
		nav: true,
		mouseDrag: true,
		dots: false,
		lazyLoad: true,
		slideBy: 1,
		margin: 10,
		stagePadding: 1,
		navText: [ '<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsive: {
			0: {
				items: 3
			},
			844: {
				items: 4
			},
			991: {
				items: 2
			},
			1024: {
				items: 3
			},
			1280: {
				items: 4,
			}
		}
	});

	// Product slider
	$('.product-slider').owlCarousel({
		loop: true,
		nav: true,
		mouseDrag: true,
		dots: true,
		slideBy: 4,
		lazyLoad: true,
		items: 1,
		margin: 10,
		responsive: {
			768: {
				items: 3
			},
			1024: {
				items: 4
			},
			1280: {
				items: 5
			}
		}
	});


	// Trends slider
	const $trends_slider_1 = $('#trend-slider-1'),
        $trends_slider_2 = $('#trend-slider-2')
    
  $trends_slider_1.on('click', '.owl-next', function () {
		$trends_slider_2.trigger('next.owl.carousel')
	});
	$trends_slider_1.on('click', '.owl-prev', function () {
		$trends_slider_2.trigger('prev.owl.carousel')
	});

	$trends_slider_1.owlCarousel({
		loop: true,
		nav: true,
		mouseDrag: true,
		dots: true,
		items: 1,
		lazyLoad: true,
		navText: [ '<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
	}).on('dragged.owl.carousel', function (e) {
		if (e.relatedTarget['_drag']['direction' == 'left']) {
			$trends_slider_2.trigger('next.owl.carousel')
		} else {
			$trends_slider_2.trigger('prev.owl.carousel')
		}
	}).on('click', '.owl-dot', function () {
		let i = $(this).index();
		$trends_slider_2.trigger('to.owl.carousel', [i, true]);
	});

	$trends_slider_2.owlCarousel({
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		loop: true,
		nav: false,
		mouseDrag: false,
		touchDrag: false,
		dots: false,
		items: 1,
		lazyLoad: true,
	});


	// Reviews slider
	$('#reviews-slider').owlCarousel({
		loop: true,
		nav: false,
		mouseDrag: true,
		dots: false,
		margin: 20,
		lazyLoad: true,
		responsive: {
			0: {
				items: 2
			},
			991: {
				items: 3
			}
		}
	});




	$('.footer__write-to-us').click(function(){
		$(this).toggleClass("active");
	});

	$('.trends__slider .owl-prev').click(function(){
		let idSlide = $('.trends__slider .owl-item.active .item').attr('id');
		idSlide = idSlide.slice(-1);
		console.log(idSlide);
		$('.trends__content .trends__content-item').removeClass("active")
		$('.trends__content #trends__content' + idSlide).addClass("active");
	});
	$('.trends__slider .owl-next').click(function(){
		let idSlide = $('.trends__slider .owl-item.active .item').attr('id');
		idSlide = idSlide.slice(-1);
		console.log(idSlide);
		$('.trends__content .trends__content-item').removeClass("active")
		$('.trends__content #trends__content' + idSlide).addClass("active");
	});
	$('.trends__slider .owl-dot').click(function(){
		setTimeout(function(){
			let idSlide = $('.trends__slider .owl-item.active .item').attr('id');
			idSlide = idSlide.slice(-1);
			$('.trends__content .trends__content-item').removeClass("active")
			$('.trends__content #trends__content' + idSlide).addClass("active");
		},150);		
	});

	

	// City panel
	$('body').on('click', function(e){
		e.preventDefault;
		if (e.target.closest('.header-item--city')) {
			$('#city-panel').addClass("city-panel--opened");
		} else if (e.target.closest('.city-panel-close') || !(e.target.closest('.city-panel'))) {
			$('#city-panel').removeClass("city-panel--opened");
		}
	});


	
	$('.subscribe__radio-block').find('.subscribe__label').each(function(){
		$(this).click(function(){
			var valueRadio = $(this).html();
			$(this).parent().find('.subscribe__label').removeClass('active');
			$(this).addClass('active');
			$(this).parent().find('input').val(valueRadio);
		});});
	$('.subscribe__checkbox-block').find('.subscribe__label--checkbox').click(function(){
		$(".subscribe__label--checkbox").toggleClass('active');
	});
	$('.card-slider').owlCarousel({
	    loop:true,
	    nav:true,
	    mouseDrag:false,
	    dots:false,
	    margin:10,
	    autoWidth:true,
	    items:8,
	    slideBy:4,
	    lazyLoad: true,
	    navText: ['<img src="img/svg/left-arrow-grey.svg" class="svg-icon">','<img src="img/svg/right-arrow-grey.svg" class="svg-icon">']
	});
	$('#interesting-slider').owlCarousel({
	    loop:true,
	    nav:true,
	    mouseDrag:true,
	    dots:false,
	    items:6,
	    slideBy:3,
	    lazyLoad: true
	});
	$('#you-see-slider').owlCarousel({
	    loop:false,
	    nav:true,
	    mouseDrag:true,
	    dots:false,
	    items:6,
	    slideBy:3,
	    lazyLoad: true
	});
	$('.card-product__discount').click(function(){
		$('.card-product__discount--call').toggleClass("active");
	});
	$('.card-product__discount-close').click(function(){
		$('.card-product__discount--call').removeClass("active");
	});
	$('.card-product-tabs__link').click(function(){
		if (!$(this).hasClass("card-product-tabs__link--active")) {
			$('.card-product-tabs__link').removeClass("card-product-tabs__link--active");
			$(this).toggleClass("card-product-tabs__link--active");
			$('#card-product-feature').toggleClass("active");
			$('#card-product-reviews').toggleClass("active");
		}		
	});
	$('.card-product-option .item').click(function(){
		if (!$(this).hasClass("active")) {
			$('.card-product-option .item').removeClass("active");
			$(this).toggleClass("active");
		}		
	});
	$('.card-product-size .item').click(function(){
		$(this).toggleClass("active");
	});
	$('.card-product__view .owl-next,.card-product__view .owl-prev').click(function(){
		let imgSlide = $('.card-product__view .owl-item.active .item').attr('data-zoom-image');
		$('.js-item img').attr('src',imgSlide);1
		$('.zoomContainer').remove();
		$('.js-item').data('zoom-image',imgSlide).elevateZoom({ 
			zoomType: "inner",
		  	cursor: "crosshair"
		})
	});
	$('.card-product__view .owl-dot').click(function(){
		setTimeout(function(){
			let imgSlide = $('.card-product__view .owl-item.active .item').attr('data-zoom-image');
			$('.js-item img').attr('src',imgSlide);1
			$('.zoomContainer').remove();
			$('.js-item').data('zoom-image',imgSlide).elevateZoom({ 
				zoomType: "inner",
			  	cursor: "crosshair"
			})
		},251);	
	});
});
