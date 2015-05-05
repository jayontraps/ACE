<?php
/**
 * The template for displaying all single posts.
 *
 * @package ace
 */

get_header(); ?>
	
<div class="wrap template_2">

	<?php include "inc/logo-2.php"; ?>

	<div role="main" id="main" class="blog-pages">

		<div class="inner_page_hero"></div>	

		<div class="innerWrap">
			<div class="col-2-3">							
				<div class="content-blog">
					<?php while ( have_posts() ) : the_post(); ?>

						<?php get_template_part( 'content', 'single' ); ?>

						<?php the_post_navigation(); ?>

						<?php
							// If comments are open or we have at least one comment, load up the comment template
							// if ( comments_open() || get_comments_number() ) :
							// 	comments_template();
							// endif;
						?>

					<?php endwhile; // end of the loop. ?>
				</div>
			</div>	

			<div class="col-1-3">
				<?php get_sidebar(); ?>
			</div>






</div>

<?php get_footer(); ?>
