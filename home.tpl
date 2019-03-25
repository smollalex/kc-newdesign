<?php echo $header; ?>
    <div class="main">
        <div class="main__slider">
            <div class="mslider__list">
                <?php $isFirstBanner = true; ?>
                <?php foreach ($main_banners as $banner): ?>
                    <a rel="nofollow" href="<?php echo $banner['link']; ?>"
                        <?php if (!empty($banner['slide_id'])): ?>
                            id="slide-<?php echo $banner['slide_id']; ?>"
                        <?php endif; ?>
                        <?php if ($isFirstBanner): ?>
                            class="mslider__item"
                            style="background: url('/image/<?php echo $banner['image']; ?>') center center; background-size: cover;"
                        <?php else: ?>
                            style="background-position: center center; background-size: cover;"
                            data-background="/image/<?php echo $banner['image']; ?>"
                            class="mslider__item background-lazy-load"
                        <?php endif; ?>
                       title="<?php echo $banner['title']; ?>">
                        <?php if (!empty($banner['text'])): ?>
                            <div class="mslider__content <?php echo $banner['text_class']; ?>">
                                <?php echo $banner['text']; ?>
                            </div>
                        <?php endif ?>
                    </a>
                    <?php $isFirstBanner = false; ?>
                <?php endforeach; ?>
            </div>
        </div>
        <?php if ($GLOBALS['is_mobile']): ?>
            <div class="main__menu--mob">
                <table class="mmenu__table--mob">
                    <tbody>
                    <tr>
                        <td><div class="h5"><a href="<?php echo $this->url->link('product/category', 'path=61'); ?>">Женская обувь</a></div></td>
                        <td><div class="h5"><a href="<?php echo $this->url->link('product/manufacturer');?>">Бренды</a></div></td>
                    </tr>
                    <tr>
                        <td><div class="h5"><a href="<?php echo $this->url->link('product/category', 'path=60'); ?>">Мужская обувь</a></div></td>
                        <td><div class="h5"><a href="<?php echo $this->url->link('information/stock');?>">Акции</a></div></td>
                    </tr>
                    <tr>
                        <td><div class="h5"><a href="<?php echo $this->url->link('product/category', 'path=66'); ?>">Сумки</a></div></td>
                        <td><div class="h5"><a href="<?php echo $this->url->link('product/category', 'collection=ss19'); ?>">Весна 2019</a></div></td>
                    </tr>
                    <tr>
                        <td colspan="2"><div class="h5"><a href="<?php echo $this->url->link('product/category', 'collection=1'); ?>">Распродажа</a></div></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        <?php endif; ?>
        <?php if (!empty($category_icons)): ?>
            <div class="main__shoes_icons carousel">
                <div class="main__shoes_icons_container carousel__inner" style="height: 106px">
                    <div class="main__shoes_icons_list" style="display: none;">
                        <?php foreach ($category_icons as $category_icon_id => $icon): ?>
                            <a class="main__shoes_icons_item" href="<?php echo $this->url->link('product/category', 'path=' . $category_icon_id); ?>">
                                <img onmouseover="this.src = '<?php echo $icon['active'] ?>'"
                                     onmouseout="this.src = '<?php echo $icon['inactive'] ?>'"
                                     src="<?php echo $icon['inactive']; ?>"
                                     alt="<?php echo $icon['name'] ?>" />
                            </a>
                        <?php endforeach; ?>
                    </div>
                    <div class="carousel__button">
                        <div class="carousel__bleft"></div>
                        <div class="carousel__bright"></div>
                    </div>
                </div>
            </div>
        <?php endif; ?>
        <div class="main__info">
            <?php if (isset($left_banner) && !empty($left_banner)): ?>
                <a rel="nofollow" href="<?php echo $left_banner['link']; ?>" class="home-banners">
                    <img src="/image/<?php echo $left_banner['image']; ?>" alt="<?php echo $left_banner['text']; ?>">
                </a>
            <?php endif; ?>
            <?php if (isset($central_banner) && !empty($central_banner)): ?>
                <a rel="nofollow" href="<?php echo $central_banner['link']; ?>" class="home-banners">
                    <img src="/image/<?php echo $central_banner['image']; ?>" alt="<?php echo $central_banner['text']; ?>">
                </a>
            <?php endif; ?>
            <?php if (isset($right_banner) && !empty($right_banner)): ?>
                <a rel="nofollow" href="<?php echo $right_banner['link']; ?>" class="home-banners">
                    <img src="/image/<?php echo $right_banner['image']; ?>" alt="<?php echo $right_banner['text']; ?>">
                </a>
            <?php endif; ?>
            <div class="clear"></div>
        </div>
        <div class="wrapper">
            <div class="main__brand">
                <?php foreach ($sorted_manufacturers as $manufacturer): ?>
                    <a href="<?php echo $this->url->link('product/category','manufacturer='. $manufacturer['manufacturer_id']); ?>">
                        <div class="mbrand__item">
                            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                 data-src="<?php echo $manufacturer['image']; ?>"
                                 alt="<?php echo $manufacturer['name']; ?>" class="lazy-load" />
                        </div>
                    </a>
                <?php endforeach; ?>
                <a href="<?php echo $this->url->link('product/manufacturer');?>"><div class="mbrand__all">
                        <span class="html_format">Все бренды</span>
                    </div></a>
                <div class="clear"></div>
            </div>

            <div class="main__collection">
                <h2 class="h2">Коллекция Весна-Лето 2019</h2>
                <div class="carousel">
                    <div class="carousel__inner">
                        <?php foreach ($new_products as $product): ?>
                            <a itemscope itemtype="http://schema.org/Product" rel="nofollow" href="<?php echo $product['href']; ?>"
                               class="catalog__item<?php echo (($product['new'] == '1') ? ' new' : ($product['discount']? ' sale' : '')); ?>"
                               data-product_info='<?php echo json_encode([
                                   'name' => htmlspecialchars($product['category'] . ' ' . $product['manufacturer'] . ' ' . $product['name'], ENT_QUOTES),
                                   'id' => $product['product_id'],
                                   'price' => $product['sale'],
                                   'brand' => htmlspecialchars($product['manufacturer'], ENT_QUOTES),
                                   'category' => htmlspecialchars($product['category'], ENT_QUOTES),
                                   'list' => $product['list_name'],
                                   'category_ids' => $product['categories_ids'],
                                   'size' => $product['size'],
                               ]) ?>'>
                                <meta itemprop="name" content="<?php echo htmlspecialchars($product['category'] . ' ' . $product['manufacturer'] . ' ' . $product['name'], ENT_QUOTES); ?>" />
                                <meta itemprop="description" content="<?php echo htmlspecialchars($product['category'] . ' ' . $product['manufacturer'] . ' ' . $product['name'], ENT_QUOTES); ?>" />
                                <div class="catalog__img">
                                    <div class="table">
                                        <div class="row">
                                            <div class="cell">
                                                <img itemprop="image" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                                     data-src="<?php echo $product['thumb']; ?>"
                                                     alt="<?php echo $product['category'] . ' ' . $product['manufacturer'] . ' ' . $product['name']; ?>"
                                                     class="lazy-load" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="h5"><span><?php echo $product['category']; ?></span> <?php echo $product['manufacturer']; ?></div>
                                <div class="catalog__price number" itemprop="offers" itemscope itemtype="http://schema.org/Offer">
                                    <?php if ($product['sale'] == $product['price']): ?>
                                        <p><span itemprop="price" content="<?php echo str_replace([' ', ',', '.'], '', $product['sale']); ?>"><?php echo number_format($product['sale'], 0, '.', ' '); ?></span> <span>руб.</span></p>
                                    <?php else: ?>
                                        <div class="cprice__old"><span itemprop="price" content="<?php echo str_replace([' ', ',', '.'], '', $product['price']); ?>"><?php echo number_format($product['price'], 0, '.', ' '); ?></span> <span>руб.</span></div>
                                        <div class="cprice__new">
                                            <b><span itemprop="price" content="<?php echo str_replace([' ', ',', '.'], '', $product['sale']); ?>"><?php echo number_format($product['sale'], 0, '.', ' '); ?></span> <span>руб.</span></b>
                                        </div>
                                    <?php endif; ?>
                                    <meta itemprop="priceCurrency" content="RUB" />
                                    <link itemprop="availability" href="http://schema.org/InStock" />
                                </div>
                                <?php if ($product['discount']): ?>
                                    <div class="catalog__sale">
                                        <div class="h5"><b><?php echo $product['discount']; ?>%</b></div>
                                    </div>
                                <?php endif; ?>
                                <?php if (!$product['discount'] && $product['new'] == '1'): ?>
                                    <div class="catalog__new">
                                        <span>New</span>
                                    </div>
                                <?php endif; ?>
                                <?php if (count($product['size']) > 0): ?>
                                    <table class="catalog__size">
                                        <tr>
                                            <?php foreach ($product['size'] as $size): ?>
                                                <td class="number"><?php echo $size; ?></td>
                                            <?php endforeach; ?>
                                        </tr>
                                    </table>
                                <?php endif; ?>
                            </a>
                        <?php endforeach; ?>
                    </div>
                    <div class="carousel__button">
                        <div class="carousel__bleft"></div>
                        <div class="carousel__bright"></div>
                    </div>
                </div>
            </div>
            
            <?php if (count($trends)): ?>
                <div class="main__trend">
                    <h2 class="h2"><a href="<?php echo $this->url->link('information/trend', ''); ?>">Тренды</a></h2>
                    <div class="main__trend_container carousel">
                        <div class="main__trend_list">
                            <?php foreach ($trends as $key => $trend): ?>
                                <div class="main__trend_item" style="background: url(/image/<?php echo $trend['thumbnail']; ?>) center center no-repeat; background-size: cover;">
                                    <div class="main__trend_content">
                                        <div class="main__trend_title"><?php echo $trend['title']; ?></div>
                                        <div class="main__trend_text"><?php echo $trend['short_description']; ?></div>
                                    </div>
                                    <div class="main__trend_shadow"></div>
                                    <div class="main__trend_bg"></div>
                                    <a rel="nofollow" href="<?php echo $this->url->link('information/trend', '') . '#trend-' . $trend['id']; ?>"></a>
                                </div>
                                <?php if ($key >= 7) {
                                    break;
                                } ?>
                            <?php endforeach; ?>
                        </div>
                        <div class="carousel__button">
                            <div class="carousel__bleft"></div>
                            <div class="carousel__bright"></div>
                        </div>
                    </div>
                </div>
            <?php endif; ?>

            
            <div class="main__block mobile-hidden">
                <h2 class="h2 mblock__header"><span><a rel="nofollow" href="<?php echo $this->url->link('information/reviews', ''); ?>">Отзывы</a></span></h2>
                <div class="mblock__item fl">
                    <div class="mblock__content">
                        <div class="main__comment">
                            <div class="main__comment_slider">
                                <div class="main__comment_list">
                                    <?php foreach ($guestbook as $guestbook_message): ?>
                                        <div class="mblock__comment">
                                            <div class="mcomment__header fl">
                                                <div>
                                                    <div class="mcomment__date fl">
                                                        <div class="h4"><b><?php echo $guestbook_message['posted_day']; ?></b></div>
                                                        <p><?php echo $guestbook_message['posted_month']; ?></p>
                                                        <p><?php echo $guestbook_message['posted_year']; ?></p>
                                                    </div>
                                                    <div class="mblock__top">
                                                        <p class="html_format"><b><?php echo $guestbook_message['name']; ?></b></p>
                                                        <p class="html_format"><?php echo $guestbook_message['city']; ?></p>
                                                    </div>
                                                    <div class="clear"></div>
                                                </div>
                                                <div class="reviewsPage__rating">
                                                    <div class="reviewsPage__star ib">
                                                        <span>товар</span>
                                                        <div class="reviews__rating active ib"><span><?php echo $guestbook_message['product_rate']; ?></span></div>
                                                    </div>
                                                    <div class="reviewsPage__star ib">
                                                        <span>сервис</span>
                                                        <div class="reviews__rating active ib"><span><?php echo $guestbook_message['service_rate']; ?></span></div>
                                                    </div>
                                                    <div class="reviewsPage__star ib">
                                                        <span>доставка</span>
                                                        <div class="reviews__rating active ib"><span><?php echo $guestbook_message['delivery_rate']; ?></span></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="mcomment__text_right">
                                                <?php if (mb_strlen($guestbook_message['message_full'], 'UTF-8') > 225): ?>
                                                    <div class="mcomment__text-short">
                                                        <?php echo mb_substr($guestbook_message['message_full'], 0, 225, 'UTF-8'); ?>
                                                        <div class="comment-readmore">
                                                            <div class="comment-shade"></div>
                                                            <a rel="nofollow" href="#">Читать весь отзыв</a>
                                                        </div>
                                                    </div>
                                                    <div class="mcomment__text-full">
                                                        <?php echo $guestbook_message['message_full']; ?>
                                                        <a rel="nofollow" class="comment-readless" href="#">Свернуть</a>
                                                    </div>
                                                <?php else: ?>
                                                    <?php echo $guestbook_message['message_full']; ?>
                                                <?php endif; ?>
                                            </div>
                                            <div class="clear"></div>
                                        </div>
                                    <?php endforeach; ?>
                                </div>
                                <div class="main__comment_buttons">
                                    <div class="main__comment_bleft"><div class="slider-button"></div></div>
                                    <div class="main__comment_bright"><div class="slider-button"></div></div>
                                </div>
                            </div>
                            <div class="clear"></div>
                        </div>
                    </div>
                </div>
                <div class="mblock__item fr">
                    <div class="mblock__content">
                        <div class="main__comment">
                            <div class="leave__comment_block">
                                <div class="main__comment_name">Оставьте свой отзыв</div>
                                <div class="main__comment_text">Мы всегда готовы ответить на любые ваши вопросы и выслушать ваши пожелания</div>
                                <div class="main__comment_button"><a rel="nofollow" class="button" href="<?php echo $this->url->link('information/reviews', ''); ?>">Оставить отзыв</a></div>
                            </div>
                            <div class="clear"></div>
                        </div>
                    </div>
                </div>
                <div class="clear"></div>
            </div>
            <div>
                <h1 class="h3"><?php echo !empty($GLOBALS['h1'])? $GLOBALS['h1'] : $h1 ?></h1>
            </div>
            <div class="main__bottom">
                <div class="mbottom__item">
                    <div class="mbottom__header apply-link-style">
                        <?php echo @$this->config->get('site_content')['home_left']['title']; ?>
                    </div>
                    <p>
                        <?php echo @$this->config->get('site_content')['home_left']['text']; ?>
                    </p>
                </div>
                <div class="mbottom__item">
                    <div class="mbottom__header apply-link-style">
                        <?php echo @$this->config->get('site_content')['home_central']['title']; ?>
                    </div>
                    <p>
                        <?php echo @$this->config->get('site_content')['home_central']['text']; ?>
                    </p>
                </div>
                <div class="mbottom__item">
                    <div class="mbottom__header apply-link-style">
                        <?php echo @$this->config->get('site_content')['home_right']['title']; ?>
                    </div>
                    <p>
                        <?php echo @$this->config->get('site_content')['home_right']['text']; ?>
                    </p>
                </div>
            </div>
        </div>
    </div>
<?php echo $footer; ?>
