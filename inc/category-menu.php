<?php 
$args = array(
    'post_type' => 'cat_menu',
    'orderby' => 'menu_order',
    'order'   => 'ASC',
    'posts_per_page' => 6
);
// the query
$the_query = new WP_Query( $args ); ?>

<?php if ( $the_query->have_posts() ) : ?>

  
  <?php $duration = 0;?>
  <section class="wrap feature-section" id="second">
    <div class="innerWrap category_title intro">    
        <h2>What we do</h2>
       <svg class="downUnderLine" viewBox="0 0 99 18.463">
          <use xlink:href="#arr-border"></use>
      </svg> 
    </div>

    <div class="innerWrap category_list medium">
  
  <?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>

    <?php $image = get_field('image'); ?>
    

    <div class="col wow fadeInUp category-item" data-wow-delay="<?php echo $duration; ?>ms">
      <a href="<?php the_field('link'); ?>">
        <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
        <div class="hide mask">
          <h3><?php the_title(); ?></h3>
          <p><?php the_field('sub-title'); ?></p>
        </div>
      </a>
    </div>


    <?php $duration = $duration + 200; 
          endwhile; ?>
  
  </div>
</section>


  <?php wp_reset_postdata(); ?>

<?php else : ?>
  <p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>
<?php endif; ?>

