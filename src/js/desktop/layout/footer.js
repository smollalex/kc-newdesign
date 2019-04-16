$(document).ready(function(){
		
	$('[name="subscribe-gender"], [name="subscribe-confirm"]').on('click', function(){
		$('[name="subscribe-gender"]').removeAttr('checked');
		$(this).attr('checked', 'checked');
	});
	$('[name="subscribe-confirm"]').on('click', function(){
		$(this).attr('checked', !($(this).attr('checked')));
	});
	
	(function() {

    function init() {
      var mapElement = $('#map2'),
          zoom = (typeof mapElement.data('zoom') !== typeof undefined && mapElement.data('zoom') !== false) ? mapElement.data('zoom') : 12;
      var myMap = new ymaps.Map('map2', {
            center: [mapElement.data('lat'), mapElement.data('lng')],
            zoom: zoom,
            controls: []
          }, {
            searchControlProvider: 'yandex#search'
          });
      
      myMap.behaviors.disable('scrollZoom');
     
      if ($('[data-address]').length) {
          
          $('.nav-pickup-point li').each(function () {
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
          
          $('.nav-pickup-point li').on('click', function () {
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
  
  

});