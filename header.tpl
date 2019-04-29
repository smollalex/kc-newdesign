<!DOCTYPE html>
<html dir="<?php echo $direction; ?>" lang="<?php echo $lang; ?>">
<head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <base href="<?php echo $base; ?>"/>
    <?php if ($description): ?>
        <meta name="description" content="<?php echo $description; ?>"/>
    <?php endif; ?>
    <?php if ($icon): ?>
        <link href="<?php echo $icon; ?>" rel="icon"/>
    <?php endif; ?>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title><?php echo $title; ?></title>
    <?php /*<script>var isMobile = <?php echo ($GLOBALS['is_mobile'] ? 'true' : 'false'); ?>;</script> */ ?>
    <?php foreach ($styles as $style): ?>
        <link href="<?php echo ((strpos($style['href'], 'http') === false)
            ? ('/' . trim($style['href'], '/')) : trim($style['href'])); ?>" rel="<?php echo $style['rel']; ?>"
              media="<?php echo $style['media']; ?>"/>
    <?php endforeach; ?>
    <?php foreach ($links as $link): ?>
        <link href="<?php echo ((strpos($link['href'], 'http') === false)
            ? ('/' . trim($link['href'], '/')) : trim($link['href'])); ?>" rel="<?php echo $link['rel']; ?>"/>
    <?php endforeach; ?>
    <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"/>

    <?php if ($GLOBALS['is_mobile']): ?>
        <link rel="canonical" href="<?php echo trim(HTTP_SERVER, '/') . html_entity_decode($_SERVER['REQUEST_URI']); ?>" />
    <?php elseif ($canonical_url): ?>
        <link rel="canonical" href="<?php echo $canonical_url; ?>" />
    <?php endif; ?>
    <?php if (!empty($noindex)): ?>
        <meta name="robots" content="noindex">
    <?php endif; ?>

    <script type="text/javascript">
        window.dataLayer = window.dataLayer || [];
        window.gDataLayer = window.gDataLayer || [];
        window.environment = "<?php echo (strpos($_SERVER['HTTP_HOST'], 'dev') === false)? 'production' : 'development' ?>";

        var isMobile = <?php echo ($GLOBALS['is_mobile'] ? 'true' : 'false'); ?>;
        var isDev = <?php echo ((strpos($_SERVER['HTTP_HOST'], 'dev') === false) ? 'false' : 'true'); ?>;
        var phpVars = <?php echo !empty($GLOBALS['phpToJsData'])? json_encode($GLOBALS['phpToJsData']) : []; ?>;
    </script>

    <?php if ($_SERVER['REMOTE_ADDR'] != '127.0.0.1'): ?>

        <!-- Google Tag Manager -->
        <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','gDataLayer','GTM-M2XVNT');</script>
        <!-- End Google Tag Manager -->

        <!-- google-analytics -->
        <script>
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

            ga('create', 'UA-59169628-1', 'auto');
            ga(function(tracker) {
			   cid = tracker.get('clientId');
			   cid = cid ? cid : '(cid not found)';
			   tracker.set('dimension4', cid);
			});
            ga('send', 'pageview');

            setTimeout("ga('send', 'event', 'read', '15_seconds')", 15000);
        </script>
        <!-- /google-analytics -->
    <?php endif ?>

    <!-- VK Pixel Code -->
    <script type="text/javascript">!function(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src="https://vk.com/js/api/openapi.js?154",t.onload=function(){VK.Retargeting.Init("VK-RTRG-253977-aAb8Y"),VK.Retargeting.Hit()},document.head.appendChild(t)}();</script>
    <noscript><img src="https://vk.com/rtrg?p=VK-RTRG-253977-aAb8Y" style="position:fixed; left:-999px;" alt=""/></noscript>
    <!-- End VK Pixel Code -->

    <!-- Facebook Pixel Code -->
    <script>
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window,document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '168601127221421');
        fbq('track', 'PageView');
    </script>
    <noscript>
        <img height="1" width="1" src="https://www.facebook.com/tr?id=168601127221421&ev=PageView&noscript=1"/>
    </noscript>
    <!-- End Facebook Pixel Code -->


	<?php if (!empty($_SESSION['purchase_process'])): ?>
		<!-- Begin Inspectlet Asynchronous Code -->
		<script type="text/javascript">
		(function() {
			window.__insp = window.__insp || [];
			__insp.push(['wid', 1400256403]);
			var ldinsp = function(){
			if(typeof window.__inspld != "undefined") return; window.__inspld = 1; var insp = document.createElement('script'); insp.type = 'text/javascript'; insp.async = true; insp.id = "inspsync"; insp.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://cdn.inspectlet.com/inspectlet.js?wid=1400256403&r=' + Math.floor(new Date().getTime()/3600000); var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(insp, x); };
			setTimeout(ldinsp, 0);
		})();
		</script>
		<!-- End Inspectlet Asynchronous Code -->
	<?php endif ?>
    <script src='https://www.google.com/recaptcha/api.js' async defer></script>
    <style>
        .menu__container--female,
        .menu__container--male,
        .menu__container--pouch,
        .menu__container--brand {
            padding: 40px 50px 40px 50px;
            background-position: right bottom;
            background-repeat: no-repeat;
            background-size: 300px;
            //min-height: 550px;
        }
        .menu__item .menu__container .wrapper {
            display: flex;
            justify-content: space-between;
        }
        .menu__item .menu {
            margin: 0;
            display: flex;
            flex-wrap: wrap;
            align-items: baseline;
            height: 100%;
        }
        .menu__item .menu:first-child {
            width: 45%;
        }
        .menu__item .menu:last-child {
            width: 55%;
        }
        .menu__item .menu .col {
            width: 33%;
        }
        .menu__item .menu h5 {
            width: 100%;
            font-weight: bold;
            text-transform: uppercase;
            color: #666;
            font-size: 18px;
            margin-bottom: 20px;
        }
        .menu__item .menu .navbar-nav {
            min-width: 100%;
            max-height: 400px;
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            align-self: start;
            overflow: hidden;
        }
        .menu__item .menu .navbar-nav .nav-item{

        }
        .menu__item .menu .nav-link {
            font-size: 13px;
            color: #2b2a29;
            height: 26px;
            overflow: hidden;
            text-transform: uppercase;
            font-weight: normal;
            font-family: "RobotoCondensedLight";
            line-height: normal;
            align-items: center;
            display: flex;
        }
        .menu__item .menu .nav-item--highlight {
            background: url(/front/view/theme/kcnew/image/menu_item_highlight.png) 19px 5px no-repeat;
            background-position: 8px 8px !important;
            padding-left: 20px;
            margin-left: -20px;
        }
        .menu__item .menu .nav-item--season {
        }
        .menu__item .menu .nav-item--new {
            background: url(/front/view/theme/kcnew/image/header-new.png);
            background-position: 2px 6px !important;
            padding-left: 20px;
            background-repeat: no-repeat;
        }
        .menu__item .menu .nav-item--sale {
             background: url(/front/view/theme/kcnew/image/header-sale.png);
            background-position: 3px 6px !important;
            padding-left: 20px;
            background-repeat: no-repeat;
        }
        .menu__item .menu .nav-item--divider {
            height: 40px;
        }
        .menu__container.menu__container--brand .brand__nav {
            padding: 0;
            width: 100%;
            display: flex;
            justify-content: space-between;
        }
        .brand__container {
            margin: 0;
            width: 100%;
            display: flex;
            justify-content: space-between;
        }
        .brand__nav a {
            margin: 0;
        }
        .menu__container--brand .menu  {
            width: 100% !important;
        }
        .menu__container.menu__container--brand .navbar-nav {
            flex-direction: row;
        }
        .menu__container--brand .menu .nav-item {
            width: 25%;
        }
        .menu__item .menu .nav-item--more a {
            padding-top: 5px;
            color: #3fb1ff;
        }

    </style>
</head>
<body<?php
echo ((isset($_COOKIE['screen_resolution_classes'])) ? ' class="' . $_COOKIE['screen_resolution_classes'] . '"' : '');
?>>



    <!--noindex-->
    <div style="display: none;" itemscope itemtype="http://schema.org/ShoeStore">
        <meta itemprop="name" content="КС-Немецкая обувь" />
        <meta itemprop="email" content="info@kc-shoes.ru" />
        <meta itemprop="telephone" content="8-800-700-27-68" />
        <a itemprop="url" href="https://kc-shoes.ru">КС-Немецкая обувь</a>
        <meta itemprop="logo" content="https://kc-shoes.ru/front/view/theme/kcnew/image/logo.png" />
        <meta itemprop="image" content="https://kc-shoes.ru/front/view/theme/kcnew/image/logo.png" />
        <meta itemprop="currenciesAccepted" content="RUB" />

        <div itemtype="http://schema.org/GeoCoordinates" itemscope="" itemprop="geo">
            <meta itemprop="latitude" content="55.7739436" />
            <meta itemprop="longitude" content="37.5772493" />
        </div>
        <div itemtype="http://schema.org/PostalAddress" itemscope="" itemprop="address">
            <meta itemprop="addressCountry" content="Россия" />
            <meta itemprop="streetAddress" content="ул. Грузинский Вал, 11 с. 4, оф. 7" />
            <meta itemprop="addressLocality" content="Москва" />
            <meta itemprop="postalCode" content="123056" />
        </div>
    </div>
    <!--/noindex-->

<?php if ($_SERVER['REMOTE_ADDR'] != '127.0.0.1'): ?>

    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M2XVNT"
                      height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->

    <!-- Yandex.Metrika counter -->
	<script type="text/javascript" >
	    (function (d, w, c) {
	        (w[c] = w[c] || []).push(function() {
	            try {
	                w.yaCounter5074516 = new Ya.Metrika2({
	                    id:5074516,
	                    clickmap:true,
	                    trackLinks:true,
	                    accurateTrackBounce:true,
	                    webvisor:true,
	                    trackHash:true,
	                    ut:"noindex",
	                    ecommerce:"dataLayer"
	                });
	            } catch(e) { }
	        });

	        var n = d.getElementsByTagName("script")[0],
	            s = d.createElement("script"),
	            f = function () { n.parentNode.insertBefore(s, n); };
	        s.type = "text/javascript";
	        s.async = true;
	        s.src = "https://mc.yandex.ru/metrika/tag.js";

	        if (w.opera == "[object Opera]") {
	            d.addEventListener("DOMContentLoaded", f, false);
	        } else { f(); }
	    })(document, window, "yandex_metrika_callbacks2");
	</script>
	<noscript><div><img src="https://mc.yandex.ru/watch/5074516?ut=noindex" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
	<!-- /Yandex.Metrika counter -->
<?php endif ?>
<!--noindex-->
<div class="city">
    <div class="wrapper">
        <div class="fr">
            <div class="city__input">
                <div class="h5">Введите область / край</div>
                <input type="text" name="region" id="ModalinputRegion" placeholder="Введите первые буквы и выберите из списка" value="" />
                <input type="hidden" name="regionId" id="ModalinputRegionId" value="" />
            </div>
            <div class="city__input">
                <div class="h5">Введите город / поселок</div>
                <input type="text" name="city" id="ModalinputCity" placeholder="Введите первые буквы и выберите из списка" value="" autocomplete="off">
                <input type="hidden" name="cityId" id="ModalinputCityId"  value="">
            </div>
        </div>
        <div class="fl">
            <div class="h5">Выберите свой город</div>
            <table class="city__table"></table>
            <span class="html_format" data-city="Москва" data-region="Московская" data-id-region="5000000000000" data-id-city="7700000000000" ><strong>Москва</strong></span>
            <span class="html_format" data-city="Екатеринбург" data-region="Свердловская" data-id-region="6600000000000" data-id-city="6600000100000" ><strong>Екатеринбург</strong></span>
            <span class="html_format" data-city="Краснодар" data-region="Краснодарский" data-id-region="2300000000000" data-id-city="2300000100000" ><strong>Краснодар</strong></span>
            <span class="html_format" data-city="Санкт-Петербург" data-region="Ленинградская" data-id-region="4700000000000" data-id-city="7800000000000" ><strong>Санкт-Петербург</strong></span>
            <span class="html_format" data-city="Новосибирск" data-region="Новосибирская" data-id-region="5400000000000" data-id-city="5400000100000" ><strong>Новосибирск</strong></span>
            <span class="html_format" data-city="Омск" data-region="Омская" data-id-region="5500000000000" data-id-city="5500000100000" ><strong>Омск</strong></span>
            <span class="html_format" data-city="Белгород" data-region="Белгородская" data-id-region="3100000000000" data-id-city="3100000100000" >Белгород</span>
            <span class="html_format" data-city="Брянск" data-region="Брянская" data-id-region="3200000000000" data-id-city="3200000100000" >Брянск</span>
            <span class="html_format" data-city="Владивосток" data-region="Приморский" data-id-region="2500000000000" data-id-city="2500000100000" >Владивосток</span>
            <span class="html_format" data-city="Волгоград" data-region="Волгоградская" data-id-region="3400000000000" data-id-city="3400000100000" >Волгоград</span>
            <span class="html_format" data-city="Воронеж" data-region="Воронежская" data-id-region="3600000000000" data-id-city="3600000100000" >Воронеж</span>
            <span class="html_format" data-city="Казань" data-region="Татарстан" data-id-region="1600000000000" data-id-city="1600000100000" >Казань</span>
            <span class="html_format" data-city="Калининград" data-region="Калининградская" data-id-region="3900000000000" data-id-city="3900000100000" >Калининград</span>
            <span class="html_format" data-city="Киров" data-region="Кировская" data-id-region="4300000000000" data-id-city="4300000100000" >Киров</span>
            <span class="html_format" data-city="Красноярск" data-region="Красноярский" data-id-region="2400000000000" data-id-city="2400000100000" >Красноярск</span>
            <span class="html_format" data-city="Курск" data-region="Курская" data-id-region="4600000000000" data-id-city="4600000100000" >Курск</span>
            <span class="html_format" data-city="Липецк" data-region="Липецкая" data-id-region="4800000000000" data-id-city="4800000100000" >Липецк</span>
            <span class="html_format" data-city="Мурманск" data-region="Мурманская" data-id-region="5100000000000" data-id-city="5100000100000" >Мурманск</span>
            <span class="html_format" data-city="Нижний Новгород" data-region="Нижегородская" data-id-region="5200000000000" data-id-city="5200000100000" >Нижний Новгород</span>
            <span class="html_format" data-city="Пермь" data-region="Пермский" data-id-region="5900000000000" data-id-city="5900000100000" >Пермь</span>
            <span class="html_format" data-city="Ростов-на-Дону" data-region="Ростовская" data-id-region="6100000000000" data-id-city="6100000100000" >Ростов-на-Дону</span>
            <span class="html_format" data-city="Рязань" data-region="Рязанская" data-id-region="6200000000000" data-id-city="6200000100000" >Рязань</span>
            <span class="html_format" data-city="Самара" data-region="Самарская" data-id-region="6300000000000" data-id-city="6300000100000" >Самара</span>
            <span class="html_format" data-city="Симферополь" data-region="Крым" data-id-region="9100000000000" data-id-city="9100000700000" >Симферополь</span>
            <span class="html_format" data-city="Смоленск" data-region="Смоленская" data-id-region="6700000000000" data-id-city="6700000300000" >Смоленск</span>
            <span class="html_format" data-city="Саратов" data-region="Саратовская" data-id-region="6400000000000" data-id-city="6400000100000" >Саратов</span>
            <span class="html_format" data-city="Томск" data-region="Томская" data-id-region="7000000000000" data-id-city="7000000100000" >Томск</span>
            <span class="html_format" data-city="Тюмень" data-region="Тюменская" data-id-region="7200000000000" data-id-city="7200000100000" >Тюмень</span>
            <span class="html_format" data-city="Уфа" data-region="Башкортостан" data-id-region="0200000000000" data-id-city="0200000100000" >Уфа</span>
            <span class="html_format" data-city="Ханты-Мансийск" data-region="Ханты-Мансийский Автономный округ - Югра" data-id-region="8600000000000" data-id-city="8600000100000" >Ханты-Мансийск</span>
            <span class="html_format" data-city="Челябинск" data-region="Челябинская" data-id-region="7400000000000" data-id-city="7400000100000" >Челябинск</span>
            <span class="html_format" data-city="Ярославль" data-region="Ярославская" data-id-region="7600000000000" data-id-city="7600000100000" >Ярославль</span>
        </div>
        <div class="clear"></div>
        <div class="city__arrow"></div>
        <div class="city__close"></div>
    </div>
</div>
<!--/noindex-->

<?php if ($GLOBALS['is_mobile']): ?>
    <div class="hsearch__input">
        <form action="/index.php">
            <input type="hidden" name="route" value="product/category">
            <input type="text" name="filter_name" value="<?php echo @$_GET['filter_name']; ?>" placeholder="Поиск">
            <button type="submit" class="htop__search-button"><span class="header-search-img" title="Искать"></span></button>
        </form>
        <div class="hsearch__close">X</div>
    </div>
<?php endif; ?>

<div class="header <?php echo $this->config->get('site_id') ?>">
    <div class="menu_item_overlay"></div>
    <div class="header__top">
        <div class="wrapper">
            <?php if (!$GLOBALS['is_mobile']): ?>
                <div class="htop__nav fl">
                    <a href="<?php echo $this->url->link('information/delivery', '');?>">Доставка и оплата</a>
                    <a rel="nofollow" href="<?php echo $this->url->link('information/about', ''); ?>">О Компании</a>
                </div>
            <?php endif; ?>
            <?php if ($GLOBALS['is_mobile']): ?>
                <div class="htop__nav--mob fl">
                    <span></span>
                </div>
            <?php endif; ?>
            <?php if ($_SERVER['REQUEST_URI'] != '/'): ?>
                <a href="/" class="header__logo fl">
                    <span class="header-logo-img" title="Интернет магазин немецкой обуви KC-Shoes"></span>
                </a>
            <?php else: ?>
                <span class="header__logo fl">
                <span class="header-logo-img" title="Интернет магазин немецкой обуви KC-Shoes"></span>
                </span>
            <?php endif; ?>
            <div class="htop__phone fl">
                <div class="h5">
                    <a class="primary-phone" href="tel:<?php echo ((isset($this->config->get('site_config')['phone'])) ? str_replace([' ', '-', '(', ')'], '', $this->config->get('site_config')['phone']) : '+78007002768'); ?>">
                        <span>
                            <?php if (isset($this->config->get('site_config')['phone'])): ?>
                                <?php echo $this->config->get('site_config')['phone']; ?>
                            <?php else: ?>
                                8-800-700-27-68
                            <?php endif; ?>
                            <span class="free-calls-label">(беспл. по России)</span>
                        </span>
                    </a>
                    <div class="htop__time<?php echo ((isset($this->config->get('site_config')['phone2']) && !empty($this->config->get('site_config')['phone2']))
                        ? ' with-additional-phone' : ''); ?>">
                        <?php if (isset($this->config->get('site_config')['phone2']) && !empty($this->config->get('site_config')['phone2'])): ?>
                            <a class="additional-phone" href="tel:<?php echo (str_replace([' ', '-', '(', ')'], '', $this->config->get('site_config')['phone2'])); ?>">
                                <span>
                                    <?php echo $this->config->get('site_config')['phone2']; ?>
                                </span>
                            </a>
                        <?php endif; ?>
                        <span>время работы операторов</span>
                        <?php if (isset($this->config->get('site_config')['work_time'])): ?>
                            <?php echo $this->config->get('site_config')['work_time']; ?>
                        <?php else: ?>
                            <p>пн-пт 6:00 - 17:00 МСК</p>
                            <p>сб-вс 7:00 - 16:00</p>
                        <?php endif; ?>
                    </div>
                </div>
            </div>

            <div class="htop__right fr">
                <?php if (!$GLOBALS['is_mobile']): ?>
                    <div class="htop__city fl<?php //echo (!isset($_SESSION['geo']) && (isset($geo['city']['name_ru']) && isset($geo['region']['name_ru']))) ? ' active' : ''; ?>">
                        <?php if (isset($_SESSION['geo']) && $_SESSION['geo']['approved']): ?>
                            <span><?php echo $_SESSION['geo']['city']['name_ru']; ?></span>
                        <?php endif; ?>
                    </div>
                    <div class="htop__auth htop__auth--mod fl<?php echo ((!$is_logged) ? ' guest-auth' : ''); ?>">
                        <?php if ($is_logged): ?>
                            <a href="<?php echo $this->url->link('account/order'); ?>" rel="nofollow">Личный кабинет</a>
                            <div class="htop__lk">
                                <a href="<?php echo $this->url->link('account/order'); ?>" rel="nofollow">Заказы</a><br>
                                <a href="<?php echo $this->url->link('account/info'); ?>" rel="nofollow">Профиль</a><br>
                                <a href="<?php echo $this->url->link('account/subscription'); ?>" rel="nofollow">Подписка</a><br>
                                <a href="<?php echo $this->url->link('account/logout'); ?>" rel="nofollow">Выход</a>
                            </div>
                        <?php else: ?>
                            <a href="#" class="guest-link" rel="nofollow">Личный кабинет</a>
                        <?php endif; ?>
                    </div>
                <?php endif; ?>
                <?php echo $cart; ?>
                <div class="clear"></div>
            </div>

            <div class="htop__search fl">
                <form action="/index.php">
                    <input type="hidden" name="route" value="product/category">
                    <input type="text" name="filter_name" value="<?php echo @$_GET['filter_name']; ?>" placeholder="Поиск">
                    <button type="submit" class="htop__search-button"><span class="header-search-img"></span></button>
                    <div class="hsearch__button"></div>
                </form>
            </div>
            <div class="clear"></div>
        </div>
    </div>
    <?php if (!$GLOBALS['is_mobile']): ?>
        <?php $activeMenuPoint = false; ?>
        <div class="header__bottom">
            <div class="wrapper">

                <?php if ($_SERVER['REQUEST_URI'] != '/'): ?>
                    <a href="/" class="header__logo fl">
                        <span class="header-logo-img" title="Интернет магазин немецкой обуви KC-Shoes"></span>
                    </a>
                <?php else: ?>
                    <span class="header__logo fl">
                    <span class="header-logo-img" title="Интернет магазин немецкой обуви KC-Shoes"></span>
                </span>
                <?php endif; ?>
                <div class="menu fl">
                    <div class="menu__item<?php if (!$activeMenuPoint && (
                            strpos($_SERVER['REQUEST_URI'], '/women') === 0 ||
                            (strpos($_SERVER['REQUEST_URI'], '/woman') === 0 && strpos($_SERVER['REQUEST_URI'], '/woman-sumki') === false)
                        )) {
                        echo ' active';
                        $activeMenuPoint = 'women';
                    }; ?>">
                        <div class="h5">
                            <a href="<?php echo $this->url->link('product/category', 'path=61'); ?>">Женская обувь</a>
                            <span></span>
                        </div>
                        <div class="menu__container menu__container--female" style="background-image: url(https://kc-shoes.ru/image/data/Menu_banner/tufli.jpg)">
                            <div class="wrapper">
                                <div class="menu">
                                    <h5>Категории</h5>
                                    <ul class="navbar-nav">
                                        <?php foreach ($woman_shoes_data as $key => $woman_category): ?>
                                            <li class="nav-item <?php echo (($woman_category['highlight'] == 1) ? 'nav-item--highlight' : ''); ?>">
                                                <!--noindex-->
                                                <a class="nav-link" href="<?php echo $this->url->link('product/category', 'path=' . $woman_category['id']) ?>">
                                                    <?php echo $woman_category['name']; ?>
                                                </a>
                                                <!--/noindex-->
                                            </li>
                                        <?php endforeach; ?>
                                    </ul>
                                </div>
                                <div class="menu">
                                    <div class="col">
                                        <h5>Бренд</h5>
                                        <ul class="navbar-nav">
                                            <?php foreach ($women_manufacturers as $key => $women_manufacturer): ?>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="<?php echo $this->url->link('product/category', 'path=61&manufacturer=' . $women_manufacturer['id']) ?>">
                                                        <?php echo $women_manufacturer['name']; ?>
                                                    </a>
                                                </li>
                                            <?php endforeach ?>
                                            <li class="nav-item nav-item--more">
                                                <a class="nav-link" href="<?php echo $this->url->link('product/category', 'route=product/manufacturer') ?>">Смотреть ещё</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col">
                                        <h5>Сезон</h5>
                                        <ul class="navbar-nav">
                                            <?php foreach ($seasons_list as $woman_season): ?>
                                                <?php if (in_array($woman_season['id'], $women_season_ids)): ?>
                                                    <li class="nav-item nav-item--season">
                                                        <a class="nav-link" href="<?php echo $this->url->link('product/category', 'path=61&season=' . $woman_season['id']) ?>">
                                                            <span class="filter-season-img filter-season-img<?php echo $woman_season['id'] ?>" title="<?php echo $woman_season['name']; ?>"></span>
                                                            <?php echo $woman_season['name']; ?>
                                                        </a>
                                                    </li>
                                                <?php endif ?>
                                            <?php endforeach ?>
                                            <li class="nav-item--divider"></li>
                                            <li class="nav-item nav-item--new">
                                                <a class="nav-link" href="<?php echo $this->url->link('product/category','path=61&collection=ss19');?>">
                                                    Новинки
                                                </a>
                                            </li>
                                            <li class="nav-item nav-item--sale">
                                                <a class="nav-link" href="<?php echo $this->url->link('product/category','path=61&collection=1');?>">
                                                    Распродажа
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col">
                                        <h5>Популярное</h5>
                                        <ul class="navbar-nav">
                                            <?php foreach ($women_price_list as $woman_price): ?>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="<?php echo $this->url->link('product/category', 'path=61&price=' . $woman_price['value']) ?>"><?php echo $woman_price['name']; ?></a>
                                                </li>
                                            <?php endforeach ?>
                                            <?php foreach ($women_size_list as $women_size): ?>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="<?php echo $this->url->link('product/category', 'path=61&size=' . $women_size['value']) ?>"><?php echo $women_size['name']; ?></a>
                                                </li>
                                            <?php endforeach ?>
                                            <?php foreach ($women_fullness_list as $women_fullness): ?>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="<?php echo $this->url->link('product/category', 'path=61&fullness=' . $women_fullness['value']) ?>"><?php echo $women_fullness['name']; ?></a>
                                                </li>
                                            <?php endforeach ?>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="menu__item hovered_menu_item <?php if (!$activeMenuPoint && strpos($_SERVER['REQUEST_URI'], '/man') === 0) {
                        echo ' active';
                        $activeMenuPoint = 'man';
                    }; ?>">
                        <div class="h5">
                            <a href="<?php echo $this->url->link('product/category', 'path=60'); ?>">Мужская обувь</a>
                            <span></span>
                        </div>
                        <div class="menu__container menu__container--male" style="background-image: url(https://kc-shoes.ru/image/data/Menu_banner/botinki.jpg)">
                            <div class="wrapper">
                                <div class="menu">
                                    <h5>Категории</h5>
                                    <ul class="navbar-nav">
                                        <?php foreach ($man_shoes_data as $key => $man_category): ?>
                                            <li class="nav-item <?php echo (($man_category['highlight'] == 1) ? 'nav-item--highlight' : ''); ?>">
                                                <!--noindex-->
                                                <a class="nav-link" href="<?php echo $this->url->link('product/category', 'path=' . $man_category['id']) ?>">
                                                    <?php echo $man_category['name']; ?>
                                                </a>
                                                <!--/noindex-->
                                            </li>
                                        <?php endforeach; ?>
                                    </ul>
                                </div>
                                <div class="menu">
                                    <div class="col">
                                        <h5>Бренд</h5>
                                        <ul class="navbar-nav">
                                            <?php foreach ($man_manufacturers as $key => $man_manufacturer): ?>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="<?php echo $this->url->link('product/category', 'path=60&manufacturer=' . $man_manufacturer['id']) ?>">
                                                        <?php echo $man_manufacturer['name']; ?>
                                                    </a>
                                                </li>
                                            <?php endforeach ?>
                                            <li class="nav-item  nav-item--more">
                                                <a class="nav-link" href="<?php echo $this->url->link('product/category', 'route=product/manufacturer') ?>">Смотреть ещё</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col">
                                        <h5>Сезон</h5>
                                        <ul class="navbar-nav">
                                            <?php foreach ($seasons_list as $man_season): ?>
                                                <?php if (in_array($man_season['id'], $man_season_ids)): ?>
                                                    <li class="nav-item nav-item--season">
                                                        <a class="nav-link" href="<?php echo $this->url->link('product/category', 'path=60&season=' . $man_season['id']) ?>">
                                                            <span class="filter-season-img filter-season-img<?php echo $man_season['id'] ?>" title="<?php echo $man_season['name']; ?>"></span>
                                                            <?php echo $man_season['name']; ?>
                                                        </a>
                                                    </li>
                                                <?php endif ?>
                                            <?php endforeach ?>
                                            <li class="nav-item--divider"></li>
                                            <li class="nav-item nav-item--new">
                                                <a class="nav-link" href="<?php echo $this->url->link('product/category','path=60&collection=ss19');?>">
                                                    Новинки
                                                </a>
                                            </li>
                                            <li class="nav-item nav-item--sale">
                                                <a class="nav-link" href="<?php echo $this->url->link('product/category','path=60&collection=1');?>">
                                                    Распродажа
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col">
                                        <h5>Популярное</h5>
                                        <ul class="navbar-nav">
                                            <?php foreach ($man_price_list as $man_price): ?>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="<?php echo $this->url->link('product/category', 'path=60&price=' . $man_price['value']) ?>"><?php echo $man_price['name']; ?></a>
                                                </li>
                                            <?php endforeach ?>
                                            <?php foreach ($man_size_list as $man_size): ?>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="<?php echo $this->url->link('product/category', 'path=60&size=' . $man_size['value']) ?>"><?php echo $man_size['name']; ?></a>
                                                </li>
                                            <?php endforeach ?>
                                            <?php foreach ($man_fullness_list as $man_fullness): ?>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="<?php echo $this->url->link('product/category', 'path=60&fullness=' . $man_fullness['value']) ?>"><?php echo $man_fullness['name']; ?></a>
                                                </li>
                                            <?php endforeach ?>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="menu__item<?php if (!$activeMenuPoint && (
                            strpos($_SERVER['REQUEST_URI'], '/sumki') === 0 ||
                            strpos($_SERVER['REQUEST_URI'], '/woman-sumki') === 0 ||
                            strpos($_SERVER['REQUEST_URI'], '/klatchi') === 0 ||
                            strpos($_SERVER['REQUEST_URI'], 'path=308') !== false ||
                            strpos($_SERVER['REQUEST_URI'], '/sumo4ki') === 0
                        )) {
                        echo ' active';
                        $activeMenuPoint = 'sumki';
                    }; ?>">
                        <div class="h5">
                            <a href="<?php echo $this->url->link('product/category', 'path=66'); ?>">Сумки</a>
                            <span></span>
                        </div>
                        <div class="menu__container menu__container--pouch" style="background-image: url(https://kc-shoes.ru/image/data/Menu_banner/sumki.jpg)">

                            <div class="wrapper">
                                <div class="menu">
                                    <h5>Категории</h5>
                                    <ul class="navbar-nav">
                                        <?php foreach ($bags_all as $key => $bag_category): ?>
                                            <li class="nav-item <?php echo (($bag_category['highlight'] == 1) ? 'nav-item--highlight' : ''); ?>">
                                                <!--noindex-->
                                                <a class="nav-link" href="<?php echo $this->url->link('product/category', 'path=' . $bag_category['id']) ?>">
                                                    <?php echo $bag_category['name']; ?>
                                                </a>
                                                <!--/noindex-->
                                            </li>
                                        <?php endforeach; ?>
                                    </ul>
                                </div>
                                <div class="menu">
                                    <div class="col">
                                        <h5>Бренд</h5>
                                        <ul class="navbar-nav">
                                            <?php foreach ($bags_producers as $key => $bags_producer): ?>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="<?php echo $this->url->link('product/category', 'path=66&manufacturer=' . $bags_producer['id']) ?>">
                                                        <?php echo $bags_producer['name']; ?>
                                                    </a>
                                                </li>
                                            <?php endforeach ?>
                                        </ul>
                                    </div>
                                    <div class="col">
                                        <h5>Сезон</h5>
                                        <ul class="navbar-nav">
                                            <li class="nav-item nav-item--new">
                                                <a class="nav-link" href="<?php echo $this->url->link('product/category','path=66&collection=ss19');?>">
                                                    Новинки
                                                </a>
                                            </li>
                                            <li class="nav-item nav-item--sale">
                                                <a class="nav-link" href="<?php echo $this->url->link('product/category','path=66&collection=1');?>">
                                                    Распродажа
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="menu__item<?php if (!$activeMenuPoint && strpos($_SERVER['REQUEST_URI'], 'route=product/manufacturer') !== false) {
                        echo ' active';
                        $activeMenuPoint = 'manufacturer';
                    }; ?>">
                        <div class="h5">
                            <a href="<?php echo $this->url->link('product/manufacturer');?>">Бренды</a>
                            <span></span>
                        </div>
                        <div class="menu__container menu__container--brand">
                            <div class="brand__nav">
                                <!--noindex-->
                                <div class="brand__container">
                                    <?php foreach ($manufacturer_first_letters as $row): ?>
                                        <a rel="nofollow" href="<?php echo $this->url->link('product/manufacturer'); ?>#<?php echo $row['letter']; ?>" data-letter="<?php echo $row['letter']; ?>"><?php echo $row['letter']; ?></a>
                                    <?php endforeach; ?>
                                </div>
                                <!--/noindex-->
                            </div>
                            <div class="menu">
                                <ul class="navbar-nav">
                                    <?php foreach ($menu_list_manufacturers_data as $item_manufacturer): ?>
                                        <li class="nav-item <?php echo (($item_manufacturer['highlight'] == 1) ? 'nav-item--highlight' : ''); ?>">
                                            <a class="nav-link" href="<?php echo $this->url->link('product/category', 'manufacturer=' . $item_manufacturer['id']) ?>">
                                                <?php echo $item_manufacturer['name']; ?>
                                            </a>
                                        </li>
                                    <?php endforeach ?>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="menu__item<?php if (!$activeMenuPoint && strpos($_SERVER['REQUEST_URI'], 'route=information/stock') !== false) {
                        echo ' active';
                        $activeMenuPoint = 'stock';
                    }; ?> stock">
                        <div class="h5">
                            <a href="<?php echo $this->url->link('information/stock'); ?>">Акции</a>
                            <span></span>
                        </div>
                    </div>
                    <div class="menu__item<?php if (!$activeMenuPoint && strpos($_SERVER['REQUEST_URI'], 'collection=0') !== false) {
                        echo ' active';
                        $activeMenuPoint = 'new';
                    }; ?> new">
                        <div class="h5">
                            <a href="<?php echo $this->url->link('product/category', 'collection=ss19'); ?>">Весна 2019</a>
                            <span></span>
                        </div>
                    </div>
                    <div class="menu__item<?php if (!$activeMenuPoint && strpos($_SERVER['REQUEST_URI'], 'collection=1') !== false) {
                        echo ' active';
                        $activeMenuPoint = 'sale';
                    }; ?> sale">
                        <div class="h5">
                            <a href="<?php echo $this->url->link('product/category', 'path=1&collection=1'); ?>">Распродажа</a>
                            <span></span>
                        </div>
                    </div>
                    <div class="clear"></div>
                </div>

                <div class="hbottom__right fr">
                    <?php echo $cart; ?>
                </div>

                <div class="clear"></div>
            </div>
        </div>
    <?php endif; ?>
</div>
<?php if ($GLOBALS['is_mobile']): ?>
    <div class="menu--mob">
        <div class="menu__top-phone">
            <div class="h5"><a href="tel:+78007002768">8 800 700 27 68</a></div>
        </div>
        <div class="menu__nav">
            <?php foreach ($menu_list as $item_key => $menu_item): ?>

                <?php if (!empty($menu_item['sub_categories'])): ?>
                    <div class="h5 item-top menu__submenu"
                         data-next_id="<?php echo $menu_item['id'] ?>">
                        <span class="mnav__item"><?php echo $menu_item['name']; ?></span>
                    </div>
                    <div class="h5 submenu-title item-<?php echo $menu_item['id'] ?> hidden"
                         data-prev_id="top"
                         data-parent_id="<?php echo $menu_item['id'] ?>">
                        <span class="mnav__item"><?php echo $menu_item['name'] ?></span>
                    </div>
                    <div class="h5 item-<?php echo $menu_item['id'] ?> item-view-all hidden">
                        <b><a class="mnav__item" href="<?php echo $this->url->link('product/category', 'path=' . $menu_item['id']); ?>">посмотреть все товары</a></b>
                    </div>
                    <?php foreach ($menu_item['sub_categories'] as $s_menu_item): ?>
                        <?php if (!empty($s_menu_item['sub_categories'])): ?>
                            <div class="h5 menu__submenu item-<?php echo $menu_item['id'] ?> hidden"
                                 data-next_id="<?php echo $s_menu_item['id'] ?>">
                                <span class="mnav__item"><?php echo $s_menu_item['name'] ?></span>
                            </div>
                            <div class="h5 submenu-title item-<?php echo $s_menu_item['id'] ?> hidden"
                                 data-prev_id="<?php echo $menu_item['id'] ?>"
                                 data-parent_id="<?php echo $s_menu_item['id'] ?>">
                                <span class="mnav__item"><?php echo $s_menu_item['name'] ?></span>
                            </div>
                            <div class="h5 item-<?php echo $s_menu_item['id'] ?> item-view-all hidden">
                                <b><a class="mnav__item" href="<?php echo $this->url->link('product/category', 'path=' . $s_menu_item['id']); ?>">посмотреть все товары</a></b>
                            </div>
                            <?php foreach ($s_menu_item['sub_categories'] as $ss_menu_item): ?>
                                <div class="h5 item-<?php echo $s_menu_item['id'] ?> hidden"
                                     data-parent_id="<?php echo $s_menu_item['id'] ?>">
                                    <a class="mnav__item" href="<?php echo $this->url->link('product/category', 'path=' . $ss_menu_item['id']); ?>"><?php echo $ss_menu_item['name'] ?></a>
                                </div>
                            <?php endforeach; ?>
                        <?php else: ?>
                            <div class="h5 item-<?php echo $menu_item['id'] ?> hidden"
                                 data-parent_id="<?php echo $menu_item['id'] ?>">
                                <a class="mnav__item" href="<?php echo $this->url->link('product/category', 'path=' . $s_menu_item['id']); ?>"><?php echo $s_menu_item['name'] ?></a></div>
                        <?php endif ?>
                    <?php endforeach; ?>
                <?php else: ?>
                    <div class="h5 item-top">
                        <a class="mnav__item" href="<?php echo $this->url->link('product/category', 'path=' . $menu_item['id']); ?>"><b><?php echo $menu_item['name']; ?></b></a>
                    </div>
                <?php endif ?>
            <?php endforeach; ?>
            <div class="h5 item-top"><a class="mnav__item" href="<?php echo $this->url->link('product/manufacturer');?>">Бренды</a></div>
            <div class="h5 item-top"><a class="mnav__item" href="<?php echo $this->url->link('information/stock');?>">Акции</a></div>
            <div class="h5 item-top"><a class="mnav__item" href="<?php echo $this->url->link('product/category', 'collection=ss19'); ?>">Весна 2019</a></div>
            <div class="h5 item-top"><a class="mnav__item" href="<?php echo $this->url->link('product/category', 'category_id=1&collection=1'); ?>">Распродажа</a></div>
        </div>
        <!--noindex-->
        <div class="menu__center item-top">
            <?php if ($is_logged): ?>
                <a href="<?php echo $this->url->link('account/order'); ?>" rel="nofollow">Личный кабинет</a>
            <?php else: ?>
                <a class="menu__lk" rel="nofollow">Личный кабинет</a>
            <?php endif; ?>
            <div class="h5">
                <?php if (isset($_SESSION['geo']) && $_SESSION['geo']['approved']): ?>
                    <a class="menu__city" rel="nofollow"><?php echo $_SESSION['geo']['city']['name_ru']; ?></a>
                <?php endif; ?>
            </div>
        </div>
        <!--/noindex-->
        <div class="menu__list item-top">
            <div class="h5"><a href="<?php echo $this->url->link('information/delivery', '');?>">Доставка и оплата</a></div>
            <!--noindex-->
            <div class="h5"><a href="<?php echo $this->url->link('information/trend', '');?>">Тренды и новости</a></div>
            <div class="h5"><a ref="nofollow" href="<?php echo $this->url->link('information/about', ''); ?>">О Компании</a></div>
            <!--/noindex-->
        </div>
    </div>
<?php endif; ?>
