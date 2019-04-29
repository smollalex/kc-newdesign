function getProductPhotoSliderforDesktop(){
 
  $('.product-slider').owlCarousel({
    loop: true,
    nav: true,
    mouseDrag: false,
    margin: 2000,
    dots: true,
    items: 1,
    animateIn: 'fadeIn',
    smartSpeed: 450,
    navText: [
			'<svg version="1.1" id="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="64px" height="64px" viewBox="0 0 64 64" enable-background="new 0 0 64 64"><polygon fill="" points="36.238,44.061 24.271,32.226 36.156,20.115 37.996,21.918 27.907,32.199 38.05,42.229 "/></svg>', 
			'<svg version="1.1" id="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="64px" height="64px" viewBox="0 0 64 64" enable-background="new 0 0 64 64"><polygon fill="" points="36.238,44.061 24.271,32.226 36.156,20.115 37.996,21.918 27.907,32.199 38.05,42.229 "/></svg>'
		]
  });
  
  var dotcount = 1;
  $('.product-slider .owl-dot').each(function() {
    $(this).addClass( 'dotnumber' + dotcount);
    $(this).attr('data-info', dotcount);
    dotcount = dotcount + 1;
  });
  
  var slidecount = 1;
  $('.product-slider .owl-item').not('.cloned').each(function() {
    $(this).addClass( 'slidenumber' + slidecount);
    slidecount = slidecount + 1;
  });
  
  $('.product-slider .owl-dot').each(function() {
    var grab = $(this).data('info');
    var slidegrab = $('.slidenumber'+ grab +' img').attr('src');
    $(this).css("background-image", "url(" + slidegrab + " )");
  });

  $(".product-zoom").elevateZoom({
    zoomType: "inner",
    cursor: "move"
	});
	
	$('.product-slider .owl-next, .product-slider .owl-prev').click(function(){
		let imgSlide = $('.product-slider .owl-item.active .product-slide-item').attr('data-zoom-image');
		$('.product-zoom img').attr('src', imgSlide);
		$('.zoomContainer').remove();
		$('.product-zoom').data('zoom-image', imgSlide).elevateZoom({ 
			zoomType: "inner",
			cursor: "move"
		})
	});
};

function getProductPhotoSliderforMobile(){
 
  $('.product-slider').owlCarousel({
    loop: true,
    nav: true,
    mouseDrag: true,
    margin: 0,
    dots: true,
    items: 1,
    animateIn: 'fadeIn',
    smartSpeed: 450,
    navText: [
			'<svg version="1.1" id="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="64px" height="64px" viewBox="0 0 64 64" enable-background="new 0 0 64 64"><polygon fill="" points="36.238,44.061 24.271,32.226 36.156,20.115 37.996,21.918 27.907,32.199 38.05,42.229 "/></svg>', 
			'<svg version="1.1" id="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="64px" height="64px" viewBox="0 0 64 64" enable-background="new 0 0 64 64"><polygon fill="" points="36.238,44.061 24.271,32.226 36.156,20.115 37.996,21.918 27.907,32.199 38.05,42.229 "/></svg>'
		]
	});
}

$(document).ready(function(){

	// Product photo slider
	if ($(window).width() > 415 ) {
		getProductPhotoSliderforDesktop();
	} else {
		getProductPhotoSliderforMobile();
	}

	$('.zoomContainer').hover(function(){
		$('body').toggleClass('.zoom-product-opened');
	});

	$('.product-slider .owl-dot').click(function(){
		setTimeout(function(){
			let imgSlide = $('.product-slider .owl-item.active .product-slide-item').attr('data-zoom-image');
			$('.product-zoom img').attr('src', imgSlide);
			$('.zoomContainer').remove();
			$('.product-zoom').data('zoom-image', imgSlide).elevateZoom({ 
				zoomType: "inner",
				cursor: "move"
			})
		}, 251);	
	});

	// Promo panel
  $('.cpipc-open').on('click',function(e){
		e.preventDefault();
		$('.product-info-promo').addClass("active");
	});
  $('.cpipc-apply').on('click', function(){
		$('.price--promo').addClass('show').prev().addClass('price--through');
		$('.product-info-promo').remove();
	});
  $('.cpipc-close').click(function(){
		$('.product-info-promo').removeClass("active");
	});
	
	// Product option
  $('.product-info-options-item').click(function(){
		if (!$(this).hasClass("active")) {
			$('.product-info-options-item').removeClass("active");
			$(this).toggleClass("active");
		}		
	});
	
	// Product size
	$('.product-info-size-item').click(function(){
		$(this).toggleClass("active");
  });
	
  // Typical slider for other product
	$('.card-slider').owlCarousel({
		loop: true,
		nav: true,
		mouseDrag: true,
		dots: true,
		slideBy: 1,
		lazyLoad: true,
		margin: 10,
		responsive: {
			320: {
				items: 2
			},
			768: {
				items: 3
			},
			1024: {
				items: 4
			},
			1280: {
				items: 5
			}
		},
		navText: [
			'<svg version="1.1" id="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="64px" height="64px" viewBox="0 0 64 64" enable-background="new 0 0 64 64"><polygon fill="" points="36.238,44.061 24.271,32.226 36.156,20.115 37.996,21.918 27.907,32.199 38.05,42.229 "/></svg>', 
			'<svg version="1.1" id="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="64px" height="64px" viewBox="0 0 64 64" enable-background="new 0 0 64 64"><polygon fill="" points="36.238,44.061 24.271,32.226 36.156,20.115 37.996,21.918 27.907,32.199 38.05,42.229 "/></svg>'
		]
	});

	// Tags slider
	if ($(window).width() > 415) {
    $('.tags-slider').addClass('owl-carousel owl-theme-tags').owlCarousel({
      loop: false,
      nav: true,
      mouseDrag: true,
      touchDrag: true,
      dots: false,
      margin: 10,
      autoWidth: true,
      slideBy: 4,
      lazyLoad: true,
      navText: [
        '<span><svg version="1.1" id="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="64px" height="64px" viewBox="0 0 64 64" enable-background="new 0 0 64 64"><polygon fill="" points="36.238,44.061 24.271,32.226 36.156,20.115 37.996,21.918 27.907,32.199 38.05,42.229 "/></svg></span>', 
        '<span><svg version="1.1" id="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="64px" height="64px" viewBox="0 0 64 64" enable-background="new 0 0 64 64"><polygon fill="" points="36.238,44.061 24.271,32.226 36.156,20.115 37.996,21.918 27.907,32.199 38.05,42.229 "/></svg></span>'
      ]
    });
  }
});