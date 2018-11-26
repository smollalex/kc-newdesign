import $ from 'jquery';

$(document).ready(function(){

 	$('.header__link').not('.header__link--yandex').hover(function(){
		$('.header__link:first-child').removeClass('active');
	},function(){
		$('.header__link:first-child').addClass('active');
	}
	);
	$('.nav-icons__counter').each(function(){
		let counter = $(this).text();
		if (counter !== "0") {
			$(this).addClass("active");
		};
	});
    $('.main-slider').owlCarousel({
	    loop:true,
	    nav:true,
	    mouseDrag:true,
	    dots:true,
	    items:1,
	    lazyLoad: true,
	    navText: ['<img src="/img/svg/left-arrow.svg" class="svg-icon">','<img src="/img/svg/right-arrow.svg" class="svg-icon">']
	});
	$('.categories-slider').owlCarousel({
	    loop:true,
	    nav:true,
	    mouseDrag:true,
	    dots:false,
	    items:6,
	    slideBy:5,
	    lazyLoad: true
	});
	$('.product-slider').owlCarousel({
	    loop:true,
	    nav:true,
	    mouseDrag:true,
	    dots:false,
	    items:4,
	    slideBy:4,
	    lazyLoad: true
	});
	$('.trends__slider').owlCarousel({
	    loop:true,
	    nav:true,
	    mouseDrag:false,
	    dots:true,
	    items:1,
	    lazyLoad: true,
	    navText: ['<img src="/img/svg/left-arrow.svg" class="svg-icon">','<img src="/img/svg/right-arrow.svg" class="svg-icon">']
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
	$('.header__city').click(function(){
		$('#city-panel').toggleClass("show-panel");
	});
	$('.city__arrow').click(function(){
		$('#city-panel').toggleClass("show-panel");
	});
	$('.reviews__slider').owlCarousel({
	    loop:true,
	    nav:true,
	    mouseDrag:true,
	    dots:false,
	    margin:20,
	    items:3,
	    lazyLoad: true});
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
	    navText: ['<img src="/img/svg/left-arrow-grey.svg" class="svg-icon">','<img src="/img/svg/right-arrow-grey.svg" class="svg-icon">']
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
