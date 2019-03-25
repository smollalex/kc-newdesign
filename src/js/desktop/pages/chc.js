$(document).ready(function(){
  $('select').select2({
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


});