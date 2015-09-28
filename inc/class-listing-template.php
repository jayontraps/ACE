<?php 
    $cat = get_category($the_cat_ID); 
    $cat_slug = $cat->slug;
 ?>

<section id="section-<?php echo $cat_slug;?>">

    <h2><?php echo get_cat_name($the_cat_ID); ?></h2>
    <div><?php echo category_description($the_cat_ID); ?> </div>

<?php 
$args = array(
    'post_type' => 'classes',
    'posts_per_page' => -1,
    'cat' => $the_cat_ID,
    'orderby' => 'menu_order',
    'order'   => 'ASC'
);
// the query
$the_query = new WP_Query( $args ); ?>

<?php if ( $the_query->have_posts() ) : ?>

    <?php while ( $the_query->have_posts() ) : $the_query->the_post(); 
        $image = get_field('image');
    ?>
        <div class="class-item">

            <h4><b><?php the_title(); ?>:</b> 

            <?php   if (get_field('age_group')) {
                        the_field('age_group');
                        echo ", ";                                                
                    } 
                    if (get_field('times')) {
                        echo "<span class='class-times'>";
                        the_field('times');
                        echo "</span>";
                        echo ", ";                        
                     } 
                    if (get_field('price')) {
                        echo "<span class='class-price'>";                                    
                        the_field('price');
                        echo "</span>";                   
                    }
            ?>
            </h4>

            <?php if (get_field('content')) {the_field('content');} ?>

            <?php if( !empty($image) ): ?>

                <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />

            <?php endif; ?>

        </div>

    <?php endwhile; ?>

    <?php wp_reset_postdata(); ?>

<?php else : ?>
    <p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>
<?php endif; ?>

</section>