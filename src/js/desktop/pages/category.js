$(document).ready(function(){

  // Card
	$('.card').on('click', function(e){
		e.preventDefault();
    
    if (e.target.closest('.card-preview')) {
      $('#productPreview').modal('show');
      $('#productPreview').on('shown.bs.modal', function(){
        getProductPreviewSlider();
      });
    }
    if (e.target.closest('.card-add-to-like')) {
      console.log('card-add-to-like');
    }
    if (e.target.closest('.card-size ')) {
      let size = $(e.target).text();
      console.log('card-size = ', size);
    }
	});


  function getFilterCount(i, count, item) {
    let filter_count = parseInt(count.text());
    filter_count = filter_count + i;
    count.text(filter_count);

    // Hide active filter state
    if (filter_count == 0) {
      item.removeClass('active');
    } else {
      if (!(item.hasClass('active'))) {
        item.addClass('active')
      }
    }
  }
  
  
  $('body').on('scroll', function (){
    let windowOffsetY = $(window).offset();
  });

  // Filter item
  $('.dropdown-filter .dropdown-item').on('click', function(e){
    
    let $dropdown_item = $(this),
        $dropdown_checkbox = $dropdown_item.find('[type="checkbox"]'),
        $dropdown_count_container = $dropdown_item.closest('.dropdown').find('.filter-count'),
        $dropdown_filter = $dropdown_item.closest('.dropdown-filter');

    // Unclose dropdown menu after click on checkbox
    e.stopPropagation();
 
    // Checkbox toggle
    if ($dropdown_checkbox.attr('checked') === 'checked') {
      getFilterCount(1, $dropdown_count_container, $dropdown_filter);
    } else {
      getFilterCount(-1, $dropdown_count_container, $dropdown_filter);
    }
  
  });

  // Filter clear
  $('.filter-clear').on('click', function(e){
    e.stopPropagation();
    let $filter = $(this).closest('.dropdown-filter');
    $filter.removeClass('active');
    $filter.find('.filter-count').text('0');
    $filter.find('[type="checkbox"]').each(function(){
      $(this).removeAttr('checked');
    })
    
  });
  
  // Sort dropdown
  $('.dropdown-sort .dropdown-item').on('click', function(){
    $('#dropdown-sort').text($(this).text());
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
  
  // Product preview slider
  function getProductPreviewSlider(){
     $('.product-preview-slider').owlCarousel({
      loop: false,
      nav: false,
      mouseDrag: true,
      touchDrag: true,
      dots: true,
      items: 1,
      animateIn: 'fadeIn',
      smartSpeed: 450,
    });
    
    var dotcount = 1;
    $('.product-preview-slider .owl-dot').each(function() {
      $(this).addClass( 'dotnumber' + dotcount);
      $(this).attr('data-info', dotcount);
      dotcount = dotcount + 1;
    });
    
    var slidecount = 1;
    $('.product-preview-slider .owl-item').not('.cloned').each(function() {
      $(this).addClass( 'slidenumber' + slidecount);
      slidecount = slidecount + 1;
    });
    
    $('.product-preview-slider .owl-dot').each(function() {
      var grab = $(this).data('info');
      var slidegrab = $('.slidenumber'+ grab +' img').attr('src');
      $(this).css("background-image", "url(" + slidegrab + " )");
    });
  };


  // Checkbox toggle
	$('.checkbox label').on('click', function(){
		if ($(this).prev().attr('checked') === 'checked') {
			$(this).prev().removeAttr('checked');
		} else {
			$(this).prev().attr('checked', 'checked');
		}
	});

});