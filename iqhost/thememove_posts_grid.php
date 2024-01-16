<?php
extract( shortcode_atts( array(
    'number'     => '1',
    'pagination' => '1'
), $atts ) );

$cat_id = 45;
$cat_link = get_category_link($cat_id);
$params = array(
    'cat'      => [$cat_id],
    'post_status'    => 'publish',
    'posts_per_page' => 2,
    'paged' => 1
);

$query = new WP_Query( $params );

$params2 = array(
    'cat'      => [$cat_id],
    'post_status'    => 'publish',
    'posts_per_page' => 2,
    'paged' => 2
);

$query2 = new WP_Query( $params2 );
?>

<!-- <section>
    <div class="row">
          <?php if ($query->have_posts()) : ?>
            <?php while ($query->have_posts()): $query->the_post(); ?>
                <div class="col-lg-4 col-md-4 h-post-card h-post-card_mb_mobile">
                    <div class="h-post-card__media-wrapper h-post-card__media-wrapper_animate_transform">
                        <img src="<?php echo get_the_post_thumbnail_url(get_the_ID(), 'thumbnail'); ?>" alt="<?php the_title(); ?>">

                        <div class="h-post-card__poster" style="background-image: url(<?php echo get_the_post_thumbnail_url(get_the_ID(), 'thumbnail'); ?>)"></div>

                        <a class="h-post-card__float-link" href="<?php echo get_post_permalink(); ?>">
                            Подробнее
                        </a>
                    </div>

                    <div class="h-post-card__body">
                        <h2 class="h-post-card__title">
                            <a href="<?php echo get_post_permalink(); ?>">
                                <?php the_title(); ?>
                            </a>
                        </h2>
                        <div class="h-post-card__date">
                            <?php echo get_the_date('m.j.Y'); ?>
                        </div>
                        <div class="h-post-card__excerpt">
                            <?php the_excerpt(); ?>
                        </div>
                    </div>
                    <div class="h-post-card__footer">
                        <a class="h-post-h-post-card__link" href="<?php echo get_post_permalink(); ?>">
                            Подробнее
                        </a>
                    </div>
                </div>
            <?php endwhile; ?>
            <?php wp_reset_postdata(); ?>
        <?php endif; ?>

        <div class="col-lg-3 col-md-4 hidden-sm hidden-xs">
            <?php if ($query2->have_posts()) : ?>
                <?php while ($query2->have_posts()): $query2->the_post(); ?>
                    <div class="h-post-line h-post-line_mb">
                        <a href="<?php echo get_post_permalink(); ?>" class="h-post-line__media-wrapper">
                            <img src="<?php echo get_the_post_thumbnail_url(get_the_ID(), 'thumbnail'); ?>" alt="<?php the_title(); ?>">

                            <div class="h-post-line__poster" style="background-image: url(<?php echo get_the_post_thumbnail_url(get_the_ID(), 'thumbnail'); ?>)"></div>

                            <div class="h-post-line__search-more">
                                <i class="eg-icon-search"></i>
                            </div>
                        </a>

                        <div class="h-post-line__desc">
                            <h3 class="h-post-line__title">
                                <a href="<?php echo get_post_permalink(); ?>">
                                    <?php the_title(); ?>
                                </a>
                            </h3>
                            <div class="h-post-line__text">
                                <?php the_excerpt(); ?>
                            </div>
                        </div>
                    </div>
                <?php endwhile; ?>
                <?php wp_reset_postdata(); ?>
            <?php endif; ?>

            <?php if ($query2->have_posts()) : ?>
            <a href="<?php echo $cat_link; ?>" class="h-btn h-btn_fill h-btn_w-100">
                Все новости
            </a>
            <?php endif; ?>
        </div>  
        
        
    </div>

    <?php if ($query2->have_posts()) : ?>
    <a href="<?php echo $cat_link; ?>" class="h-btn h-btn_fill h-btn_w-100 hidden-lg hidden-md">
        Все новости
    </a>
    <?php endif; ?>
</section> -->
<br>
<div class="section">
    <div class="row">
        <div class="col-lg-6 col-md-6 h-post-card h-post-card_mb_mobile">
            <div class="h-post-card__media-wrapper h-post-card__media-wrapper_animate_transform">
                        <img src="/wp-content/uploads/2015/07/lazne-luhacovice.jpg" alt="">

                        <div class="h-post-card__poster" style="background-image: url(/wp-content/uploads/2015/07/lazne-luhacovice.jpg)"></div>

                        <a class="h-post-card__float-link" href="#">
                            Подробнее
                        </a>
                    </div>
                    <div class="h-post-card__body">
                        <h2 class="h-post-card__title">
                            <a href="#">
                                
                                Санаторно-курортное лечение                            
                            </a>
                        </h2>
                        <div class="h-post-card__date">
                                                        09.14.2019                        
                        </div>
                        <div class="h-post-card__excerpt">
                            <p>24 декабря 2019 ООО «Волгодонская АЭС — Сервис» проводит прием заявок на санаторно-курортное лечение. Необходимые документы: Заявление на имя Генерального […]</p>
                        </div>
                    </div>
        </div>
        <div class="col-lg-6 col-md-6  hidden-sm hidden-xs">
            
                <div class="h-post-line h-post-line_mb ">
                        <a href="1" class="h-post-line__media-wrapper">
                            <img src="/wp-content/uploads/2015/07/lazne-luhacovice.jpg" alt="<>">

                            <div class="h-post-line__poster" style="background-image: url(/wp-content/uploads/2015/07/lazne-luhacovice.jpg)"></div>

                            <span class="h-post-card__float-link" href="#">
                            Подробнее
                        </span>
                        </a>

                        <div class="h-post-line__desc">
                            <h3 class="h-post-line__title">
                                <a href="2">
                                   Санаторно-курортное лечение
                                </a>
                            </h3>
                            <div class="h-post-line__text">
                                <p>24 декабря 2019 ООО «Волгодонская АЭС — Сервис» проводит прием заявок на санаторно-курортное лечение. Необходимые документы: Заявление на имя Генерального […]</p>
                            </div>
                        </div>
                    </div>
            
            <div class="h-post-line h-post-line_mb">
                        <a href="2" class="h-post-line__media-wrapper">
                            <img src="/wp-content/uploads/2015/07/lazne-luhacovice.jpg" alt="<>">

                            <div class="h-post-line__poster" style="background-image: url(/wp-content/uploads/2015/07/lazne-luhacovice.jpg)"></div>

                            <span class="h-post-card__float-link" href="#">
                            Подробнее
                        </span>
                        </a>

                        <div class="h-post-line__desc">
                            <h3 class="h-post-line__title">
                                <a href="#">
                                   Санаторно-курортное лечение
                                </a>
                            </h3>
                            <div class="h-post-line__text">
                                <p>24 декабря 2019 ООО «Волгодонская АЭС — Сервис» проводит прием заявок на санаторно-курортное лечение. Необходимые документы: Заявление на имя Генерального […]</p>
                            </div>
                        </div>
                    </div>
                     <a href="http://vnpp-new/novosti/" class="h-btn h-btn_fill btn-news">
                Все новости
            </a>
        </div>
    </div>
    <a href="#" class="h-btn h-btn_fill h-btn_w-100 hidden-lg hidden-md">
        Все новости
    </a>
</div>

<section id="home__news-block">
    <div class="row">
        <div class=" col-lg-6  col-lg-offset-0   ">
            <a href="#" class="main-new new">
              <img href="#" src="/wp-content/uploads/2015/07/lazne-luhacovice.jpg" alt="">
              <div class="new__content">
                  <div class="new__up">

                  <span class="new__date" >
                      <span class="day">21</span>
                      <span class="right">
                        Сентября<br>2020                      
                    </span>
                    </span>
                  <div class="new__tag">Новость</div>
              </div>
                  <div class="new__down">
                    <div class="new__article">
                        <div class="new__title">
                             Санаторно-курортное лечение 
                          </div>
                        <div class="new__description">
                            24 декабря 2019 ООО «Волгодонская АЭС — Сервис» проводит прием заявок на санаторно-курортное лечение.
                        </div>                             
                    </div>
                    <br>
                      <div class="new__readmore">Подробнее</div>
                  </div>    
              </div>
            </a>
        </div>
        <div class=" col-lg-6 col-lg-offset-0 block-flex">
            <a href="#" class="block-new new">
                
                <img href="#" src="/wp-content/uploads/2015/07/lazne-luhacovice.jpg" alt="">
              <div class="new__content">
                  <div class="new__up">

                  <span class="new__date" >
                      <span class="day">21</span>
                      <span class="right">
                        Сентября<br>2020                      
                    </span>
                    </span>
                  <div class="new__tag">Новость</div>
              </div>
                  <div class="new__down">
                    <div class="new__article">
                        <div class="new__title">
                             Санаторно-курортное лечение 
                          </div>
                                                    
                    </div>
                    <br>
                      <div class="new__readmore">Подробнее</div>
                  </div>    
              </div>
            </a>
            <a href="#" class="block-new new">
                
                <img href="#" src="/wp-content/uploads/2015/07/lazne-luhacovice.jpg" alt="">
              <div class="new__content">
                  <div class="new__up">

                  <span class="new__date" >
                      <span class="day">21</span>
                      <span class="right">
                        Сентября<br>2020                      
                    </span>
                    </span>
                  <div class="new__tag">Новость</div>
              </div>
                  <div class="new__down">
                    <div class="new__article">
                        <div class="new__title">
                             Санаторно-курортное лечение 
                          </div>
                                                    
                    </div>
                    <br>
                      <div class="new__readmore">Подробнее</div>
                  </div>    
              </div>
            </a>
            <a href="#" class="block-new new">
               
                 <img href="#" src="/wp-content/uploads/2015/07/lazne-luhacovice.jpg" alt="">
              <div class="new__content">
                  <div class="new__up">

                  <span class="new__date" >
                      <span class="day">21</span>
                      <span class="right">
                        Сентября<br>2020                      
                    </span>
                    </span>
                  <div class="new__tag">Новость</div>
              </div>
                  <div class="new__down">
                    <div class="new__article">
                        <div class="new__title">
                             Санаторно-курортное лечение 
                          </div>
                                                    
                    </div>
                    <br>
                      <div class="new__readmore">Подробнее</div>
                  </div>    
              </div>
            </a>
        </div>    
    </div>
</section>