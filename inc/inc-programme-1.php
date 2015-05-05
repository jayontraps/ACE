<?php 
$args = array(
    'post_type' => 'outreach',
    'posts_per_page' => -1,
    'orderby' => 'menu_order',
    'order'   => 'ASC'
);
// the query
$the_query = new WP_Query( $args ); ?>

<?php if ( $the_query->have_posts() ) : ?>

	<div id="programme"  class="wrap feature-section">
	<div class="innerWrap medium-width">
		<div class="col-1-3">
			<div class="sidebar-options">

				<div class="sub-nav vertical" gumby-fixed="#programme" gumby-pin="#last" gumby-offset="50px">
					<ul id="sub-nav" class="">

					<?php $i = 0;?>

					<?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>						
						<li><a href="#item_<?php echo $i;?>"><?php the_field('menu_title'); ?></a></li>

						<?php 	$i = $i + 1; 
							endwhile; 
						?>
						<li><a href="#last">Get Involved</a></li>
					</ul>
				</div>	
				
				<div class="space">Keep your options open</div>		

			</div>
		</div>

		<div class="col-2-3 prog-sections">
	

	<?php $i = 0;?>
	<?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
		
		<section id="item_<?php echo $i;?>">
			<h3><?php the_title(); ?></h3>
			<?php the_field('content'); ?>			
		</section>
	<?php 	$i = $i + 1; endwhile; ?>
			
			<section id="last">
				<h3>Get Involved</h3>
				<p><a href="mailto:education@acedanceandmusic.com">Contact us</a> to book a workshop or to find out more information.</p>	
			</section>
		</div>
	</div>
</div>


<?php wp_reset_postdata(); ?>

<?php else : ?>
	<p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>
<?php endif; ?>