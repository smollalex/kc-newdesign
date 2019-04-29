window.$ = window.jQuery = require ('jquery');
require ('popper.js/dist/popper.min');
require ('bootstrap/dist/js/bootstrap.min');
require ('owl.carousel/dist/owl.carousel');
require ('jquery-hoverintent/jquery.hoverIntent');
require ('select2/dist/js/select2');
require ('starrr/dist/starrr');
require ('@zeitiger/elevatezoom/jquery.elevatezoom');
require ('waypoints/lib/jquery.waypoints.min.js');
require ('waypoints/lib/shortcuts/inview.min.js');



require ('./libs/jquery.dlmenu.js');

require ('./layout/header.js');
require ('./layout/footer.js');
require ('./layout/card.js');

require ('./pages/home.js');
require ('./pages/category.js');
require ('./pages/product.js');
require ('./pages/chc.js');
require ('./pages/personal.js');

import "../../scss/desktop.scss";