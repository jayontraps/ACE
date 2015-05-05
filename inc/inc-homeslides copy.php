<?php
$args = array (
    'post_type' => 'homepage_slides',
    'posts_per_page' => -1, // show them all?
    'orderby' => 'menu_order',
    'order' => 'ASC'
);

$the_query = new WP_Query( $args ); ?>

<?php if ( $the_query->have_posts() ) : ?>

<div class="home-slides">
	<ul class="bxslider-home">	
		<?php while ( $the_query->have_posts() ) : $the_query->the_post(); 
			$image = get_field('image');
		?>

			<li class="hero <?php if(get_field('background_position')){the_field('background_position');}; ?> <?php if(get_field('text_align')){the_field('text_align');}; ?>" style="background-image: url('<?php echo $image['url']; ?>');">
				<div class="wide-tagline innerWrap">
			        <div class="tagline"> 
			            <div class="tagWrap"><?php the_title(); ?></div>  
						
						<?php if (get_field('slide_subtitle')): ?>
							<div class="subWrap">
			                	<div class="upright"><?php the_field('slide_subtitle'); ?></div>
			            	</div> 
						<?php endif ?>
                                
			        </div> 
			    </div>

			    <div class="arrWrap">
			        <a href="#" class="scroll-down">

			        <svg class="icon-keyboard-arrow-down" viewBox="0 0 1024 1024">
			            <use xlink:href="#icon-keyboard-arrow-down"></use>
			        </svg>          

			        </a>                    
			    </div>

			</li>

		<?php endwhile; ?>
	</ul>
</div>


<?php wp_reset_postdata(); ?>

<?php else : ?>
	<p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>
<?php endif; ?>