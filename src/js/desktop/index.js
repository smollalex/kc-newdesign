$(document).ready(function(){

	// Header items
 	$('.header-item').hover(function(){
		$(this).addClass('header-item--active');
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
		navText: [ '<i class="fal fa-angle-left"></i>', '<i class="fal fa-angle-right"></i>'],
	});

	// Brands home slider
	$('#brands-slider').owlCarousel({
		loop: true,
		nav: true,
		mouseDrag: true,
		dots: true,
		slideBy: 5,
		lazyLoad: true,
		navText: [ '<i class="fal fa-angle-left"></i>', '<i class="fal fa-angle-right"></i>'],
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
		navText: [ '<i class="fal fa-angle-left"></i>', '<i class="fal fa-angle-right"></i>'],
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
		navText: [ '<i class="fal fa-angle-left"></i>', '<i class="fal fa-angle-right"></i>'],
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

	

  
});