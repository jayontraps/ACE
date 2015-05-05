<?php
	// set the "paged" parameter (use 'page' if the query is on a static front page)
	$paged = ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1;

	// the arguements
	$args = array(
		'paged'     => $paged,
		'post_type'    => 'post',					
	    'posts_per_page'  => '10' 
		);

	// the query
	$the_query = new WP_Query( $args ); 
	?>

	<?php if ( $the_query->have_posts() ) : ?>

	<ul class="archive-list">

		<?php
		// the loop
		while ( $the_query->have_posts() ) : $the_query->the_post(); 
		
		?>
		<li>
			<div class="row wrapper">
				<div class="post-item group">
					<article>
						<h2 class="post-link"><a href="<?php the_permalink() ?>"><?php the_title(); ?></a></h2>

						<?php if (get_the_modified_time() != get_the_time()) : ?>
							<p class="posted-time"><?php the_time('F j, Y'); ?></p>
						<?php else: ?>	
							<p class="posted-time">Posted on <?php the_time('F j, Y'); ?></p>
						<?php endif; ?>
												
				        <?php // print_excerpt(400); 
				        	the_excerpt();
				        ?>
						
						<a class="blog_link" href="<?php the_permalink() ?>">View Full Article ></a>

					</article>
				</div>	<!-- .post-item -->		
			</div>
		</li>


		<?php endwhile; ?>

	</ul>



	<ul class="nav">
		<li>
		<?php
		// usage with max_num_pages
		next_posts_link( 'Older Entries', $the_query->max_num_pages ); ?></li>

		<li><?php previous_posts_link( 'Newer Entries' ); ?></li>
	</ul>

	

	<?php 
	// clean up after our query
	wp_reset_postdata(); ?>
	<?php else:  ?>
	<p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>
	<?php endif; ?>	