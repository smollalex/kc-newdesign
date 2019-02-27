
  
  
  /*

  const full_height = $('body').outerHeight(true),
        content_height = $('main').outerHeight(true),
        header_height = $('.header').outerHeight(true) + $('.navbar').outerHeight(true) + $('.breadcrumb').outerHeight(true),
        category_height = $('.category-list').outerHeight(true),
        footer_height = $('.footer').outerHeight(true),
        
        footer_top = header_height + content_height,
        category_top = header_height,
        category_bottom = content_height - category_height,
        
        $category = $('.category-list'),
        window_height = $(window).height();


  
  
  /* const inview = new Waypoint.Inview({
    element: $category,
    entered: function(direction) {
      if (direction == 'down' && (category_height > $(window).height())) {
        $category.addClass('position-fixed');
        $category.css({'bottom': '0', 'top': 'auto', 'margin-top': '0'});
      }
    },
    exit: function(direction) {
      if (direction == 'down' && (category_height < $(window).height())) {
        $category.addClass('position-fixed');
        $category.css({'bottom': 'auto', 'top': '0', 'margin-top': '0'});
      }
    }
  });

  const inview_footer = new Waypoint.Inview({
    element: $('.footer'),
    enter: function(direction) {
      if (direction == 'down') {
        $category.removeClass('position-fixed');
        $category.css({'bottom': '0', 'margin-top': `${content_height - category_height}px`});
        $category.addClass('hold-bottom');
        $category.removeClass('hold-top');
      }
    }
  });
  const inview_breadcrumb = new Waypoint.Inview({
    element: $('.breadcrumb'),
    enter: function(direction) {
      if (direction == 'up') {
        $category.removeClass('position-fixed');
        $category.css({'bottom': 'auto', 'top': 'auto', 'margin-top': '0'});
        $category.addClass('hold-top');
        $category.removeClass('hold-bottom');
      }
    }
  });
 */
  /*
  var lastScrollTop = 0;

  $(window).on('scroll', function(){
    var st = $(this).scrollTop();
    console.dir(st);
         
    // вариант 1 - категории больше экрана
    if (category_height > window_height) {

      if (st > lastScrollTop) {
        // движение вниз
        
        // доходим до низа категорий
        if (st >= (category_height + header_height) - window_height) {
          $category.addClass('position-fixed');
          $category.css({'bottom': '0', 'top': 'auto', 'margin-top': '0'});
        }

        // доходим до футера
        if (st >= (footer_top) - window_height) {
          $category.removeClass('position-fixed');
          $category.css({'bottom': '0', 'margin-top': `${content_height - category_height}px`});
        }

      } else {
        // движемся вверх
        if (!$category.hasClass('blocked')) {
          $category.removeClass('position-fixed');
          $category.css({'bottom': '0', 'margin-top': `${st + header_height}px`});
          $category.addClass('blocked');
          console.log(st + header_height);
        }
        
        /* 
        if (st < (footer_top) - window_height) {
          console.log((footer_top) - window_height);

          $category.addClass('position-fixed');
          $category.css({'bottom': '0', 'top': 'auto', 'margin-top': '0'});
        }
        if (st < (category_height + header_height) - window_height) {
          $category.removeClass('position-fixed');
          $category.css({'bottom': '0', 'top': 'auto', 'margin-top': '0'});
        } */
      }
      /*
          } else {
          // вариант 2 - категории меньше экрана
      
            if (st > lastScrollTop) {
              // движение вниз
      
            } else {
              // движение вверх
              
            }
      
          }
      
          lastScrollTop = st;
      
        });
      
      /* 
            if (st >= window_height - header-height )
            if (!$category.hasClass('hold-bottom')) {
              // если нету нижнего фиксатора прижимаем к низу экрана 
              if (st >= category_bottom) {
                $category.addClass('position-fixed');
                $category.css({'bottom': '0', 'top': 'auto', 'margin-top': '0'});
              }
            }
      
          } else {
      
            if (!$category.hasClass('hold-top')) {
              // если нету верхнего фиксатора прижимаем к верху экрана
              if ((st <= content_height - category_height + 180)) {
                $category.addClass('position-fixed');
                $category.css({'bottom': 'auto', 'top': '0', 'margin-top': '0'});
              }
            } */
            
           /*  if ($category.hasClass('hold-top') && $category.hasClass('position-fixed')) {
              $category.removeClass('hold-top');
              $category.removeClass('position-fixed');
              $category.css({'bottom': '0', 'margin-top': `${st + header_height}px`});
            } */
          
      
          