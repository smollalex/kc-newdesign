$(document).ready(function(){
  
  // Order items slider
	$('.order-slider').owlCarousel({
    loop: false,
		nav: false,
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
			414: {
				items: 1
			},
			768: {
				items: 2
			},
			1024: {
				items: 3
			},
			1280: {
				items: 4
			}
		}
  });
  

  // Show reason of refund
  $('.order-refund .checkbox label').on('click', function(){
    if ($(this).prev().attr('checked') === 'checked') {
      $(this).closest('.order-refund').find('.order-refund-reason').show();
      if ($(this).closest('.order-refund').find('select.form-control').val() === 'refund-reason-4') {
        $(this).closest('.order-refund').find('.order-refund-reason-other').show();
      }
		} else {
      $(this).closest('.order-refund').find('.order-refund-reason').hide();
      $(this).closest('.order-refund').find('.order-refund-reason-other').hide();
    }
    
   
    if ($('[name="check-to-refund"][checked="checked"]').length > 0) {
      $('.order-refund-wrap').css('display', 'flex');
    } else {
      $('.order-refund-wrap').css('display', 'none');
    }
  });


  // Toggle for other field reason
  $('.order-refund-reason select').on('change', function(){
    if ($(this).val() === 'refund-reason-4') {
      $(this).closest('.order-refund').find('.order-refund-reason-other').show();
    } else {
      $(this).closest('.order-refund').find('.order-refund-reason-other').hide();
    }
  });
  
  // Toggle refund type
  $('.refund-type').on('change', function(){
    if ($(this).val() === 'refund-type-1') {
      $('.refund-type-1').show();
      $('.refund-type-2').hide();
    } else {
      $('.refund-type-2').show();
      $('.refund-type-1').hide();
    }
  });
});