$(document).ready(function(){
    $('.main-slider').owlCarousel({
	    loop:true,
	    nav:true,
	    mouseDrag:true,
	    dots:true,
	    items:1,
	    lazyLoad: true
	});
	$('.categories-slider').owlCarousel({
	    loop:true,
	    nav:true,
	    mouseDrag:true,
	    dots:true,
	    items:3,
	    lazyLoad: true
	});
	$('.product-slider').owlCarousel({
	    loop:true,
	    nav:true,
	    mouseDrag:true,
	    dots:true,
	    items:2,
	    lazyLoad: true
	});
	$('.trends__slider').owlCarousel({
	    loop:true,
	    nav:true,
	    mouseDrag:false,
	    dots:true,
	    items:1,
	    lazyLoad: true
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
			console.log(idSlide);
			$('.trends__content .trends__content-item').removeClass("active")
			$('.trends__content #trends__content' + idSlide).addClass("active");
		},150);		
	});
	$('.reviews__slider').owlCarousel({
	    loop:true,
	    nav:false,
	    mouseDrag:true,
	    dots:true,
	    items:1,
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
	$('.nav-icons__item--search').click(function(){
		$('.search-form').toggleClass("show-search-form");
	});
	$('.city__arrow').click(function(){
		$('.search-form').toggleClass("show-search-form");
	});
	$('.htop__nav--mob').click(function(){
		$('.htop__nav--mob').toggleClass("active");
		$('.left-menu').toggleClass("js-show-left-menu");
		$('body').toggleClass("js-show-left-active");
	});
	$('.js-content').click(function(){
		$(this).toggleClass("active");	
		$('.js-first-level').toggleClass("left-menu--hidden");
	});
	$('.card-slider').owlCarousel({
	    loop:true,
	    nav:false,
	    mouseDrag:true,
	    dots:false,
	    margin:10,
	    autoWidth:true,
	    items:2,
	    slideBy:1,
	    lazyLoad: true
	});
	$('#interesting-slider').owlCarousel({
	    loop:true,
	    nav:false,
	    mouseDrag:true,
	    dots:true,
		items:2,
		responsive: {
			768: {
				items: 4
			}	
		},
	    slideBy:2,
	    lazyLoad: true
	});
	$('#you-see-slider').owlCarousel({
	    loop:false,
	    nav:false,
	    mouseDrag:true,
	    dots:true,
	    items:2,
	    slideBy:2,
	    lazyLoad: true
	});
	$('.card-product__view').owlCarousel({
	    loop:true,
	    nav:false,
	    mouseDrag:true,
	    dots:true,
	    margin:0,
	    items:1,
	    slideBy:1,
    	lazyLoad: true
	});
	$('.card-product-tabs__link').click(function(){
		if (!$(this).hasClass("card-product-tabs__link--active")) {
			$('.card-product-tabs__link').removeClass("card-product-tabs__link--active");
			$(this).toggleClass("card-product-tabs__link--active");
			$('#card-product-feature').toggleClass("active");
			$('#card-product-reviews').toggleClass("active");
		}		
	});
	$('.card-product-size .item').click(function(){
		$(this).toggleClass("active");
	});
	$('.card-product-feature__toggler').click(function(){
		let counter = $('.card-product-feature__item').length*28;
		$('.card-product-feature__list').toggleClass("active");
		$('.card-product-feature__list').css({"height": "224px"});
		$('.card-product-feature__list.active').css({"height": counter+"px"});
		$(this).toggleClass("active");
	});
	$('.new-product-banner').click(function(){
		$(this).toggleClass("active");
	});
	$('.actual-discount-banner').click(function(){
		$(this).toggleClass("active");
	});
});
