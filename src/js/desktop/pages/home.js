$(document).ready(function(){

  // Main home slider
	$('#main-slider').owlCarousel({
		loop: true,
		nav: true,
		mouseDrag: true,
		dots: true,
		items: 1,
		lazyLoad: true,
		navText: [
			'<svg version="1.1" id="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="64px" height="64px" viewBox="0 0 64 64" enable-background="new 0 0 64 64"><polygon fill="" points="36.238,44.061 24.271,32.226 36.156,20.115 37.996,21.918 27.907,32.199 38.05,42.229 "/></svg>', 
			'<svg version="1.1" id="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="64px" height="64px" viewBox="0 0 64 64" enable-background="new 0 0 64 64"><polygon fill="" points="36.238,44.061 24.271,32.226 36.156,20.115 37.996,21.918 27.907,32.199 38.05,42.229 "/></svg>'
		]
	});


	// Brands home slider
	$('#brands-slider').owlCarousel({
		loop: true,
		nav: true,
		mouseDrag: true,
		dots: true,
		slideBy: 5,
		lazyLoad: true,
		navText: [
			'<svg version="1.1" id="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="64px" height="64px" viewBox="0 0 64 64" enable-background="new 0 0 64 64"><polygon fill="" points="36.238,44.061 24.271,32.226 36.156,20.115 37.996,21.918 27.907,32.199 38.05,42.229 "/></svg>', 
			'<svg version="1.1" id="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="64px" height="64px" viewBox="0 0 64 64" enable-background="new 0 0 64 64"><polygon fill="" points="36.238,44.061 24.271,32.226 36.156,20.115 37.996,21.918 27.907,32.199 38.05,42.229 "/></svg>'
		],
		responsive: {
			0: {
				items: 6
			},
			991: {
				items: 7
			},
			1280: {
				items: 8
			}
		}
	});


	// New product slider
	$('#new-products-slider, #actual-discount-slider').owlCarousel({
		loop: false,
		nav: true,
		mouseDrag: true,
		dots: false,
		lazyLoad: true,
		slideBy: 1,
		margin: 10,
		stagePadding: 1,
		navText: [
			'<svg version="1.1" id="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="64px" height="64px" viewBox="0 0 64 64" enable-background="new 0 0 64 64"><polygon fill="" points="36.238,44.061 24.271,32.226 36.156,20.115 37.996,21.918 27.907,32.199 38.05,42.229 "/></svg>', 
			'<svg version="1.1" id="" xmlns="http:/www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="64px" height="64px" viewBox="0 0 64 64" enable-background="new 0 0 64 64"><polygon fill="" points="36.238,44.061 24.271,32.226 36.156,20.115 37.996,21.918 27.907,32.199 38.05,42.229 "/></svg>'
		],
		responsive: {
			0: {
				items: 3
			},
			768: {
				items: 4
			},
			991: {
				items: 2
			},
			1024: {
				items: 5
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
		mouseDrag: true,
		touchDrag: true,
		dots: true,
		items: 1,
		lazyLoad: true,
		navText: [
			'<svg version="1.1" id="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="64px" height="64px" viewBox="0 0 64 64" enable-background="new 0 0 64 64"><polygon fill="" points="36.238,44.061 24.271,32.226 36.156,20.115 37.996,21.918 27.907,32.199 38.05,42.229 "/></svg>', 
			'<svg version="1.1" id="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="64px" height="64px" viewBox="0 0 64 64" enable-background="new 0 0 64 64"><polygon fill="" points="36.238,44.061 24.271,32.226 36.156,20.115 37.996,21.918 27.907,32.199 38.05,42.229 "/></svg>'
		],
		responsive: {
			0: {
				nav: false
			},
			769: {
				nav: true
			}
		}
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