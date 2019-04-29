$(document).ready(function(){
  
  $('select.form-control').select2({
    minimumResultsForSearch: -1
  });

  $('.starrr').starrr({
    rating: 0
  });

  (function() {

    function init() {
      var mapElement = $('#map'),
          zoom = (typeof mapElement.data('zoom') !== typeof undefined && mapElement.data('zoom') !== false) ? mapElement.data('zoom') : 12;
      var myMap = new ymaps.Map('map', {
            center: [mapElement.data('lat'), mapElement.data('lng')],
            zoom: zoom,
            controls: []
          }, {
            searchControlProvider: 'yandex#search'
          });
      
      myMap.behaviors.disable('scrollZoom');
     
      if ($('[data-address]').length) {
          
          $('.nav-shops li').each(function () {
            var address = $(this).attr('data-address');
           
            ymaps.geocode(address, {results: 1}).then(function (res) {
              var firstGeoObject = res.geoObjects.get(0),
                  coords = firstGeoObject.geometry.getCoordinates(),
                  bounds = firstGeoObject.properties.get('boundedBy');
                
              myMap.geoObjects.add(new ymaps.Placemark(coords, {}, {
                preset: 'islands#dotIcon',
                iconColor: '#1e98ff'
              }));
            });
          });
          
          $('.nav-shops li').on('click', function () {
            var address = $(this).attr('data-address');
            
            ymaps.geocode(address, {results: 1}).then(function (res) {
              var firstGeoObject = res.geoObjects.get(0), 
                  coords = firstGeoObject.geometry.getCoordinates();
              
              myMap.setZoom(17);
              myMap.panTo(coords, {flying: true, duration: 1000});
            });
          });
      } 
    }
    ymaps.ready(init);
  })();

  
  // Typical slider for other product
	$('#trend-slider').owlCarousel({
		loop: true,
		nav: true,
		mouseDrag: true,
		dots: true,
		slideBy: 3,
		lazyLoad: true,
		items: 1,
		margin: 10,
		responsive: {
			768: {
				items: 3
			},
			768: {
				items: 3
			},
			1280: {
				items: 4
			}
    },
    navText: [
      '<span><svg version="1.1" id="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="64px" height="64px" viewBox="0 0 64 64" enable-background="new 0 0 64 64"><polygon fill="" points="36.238,44.061 24.271,32.226 36.156,20.115 37.996,21.918 27.907,32.199 38.05,42.229 "/></svg></span>', 
      '<span><svg version="1.1" id="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="64px" height="64px" viewBox="0 0 64 64" enable-background="new 0 0 64 64"><polygon fill="" points="36.238,44.061 24.271,32.226 36.156,20.115 37.996,21.918 27.907,32.199 38.05,42.229 "/></svg></span>'
    ]
	});

});