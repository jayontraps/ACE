<?php
/**
 * Template name: Template 2
 *
 * @package ace
 */

get_header(); ?>

<div class="wrap template_2">

	<?php include "inc/logo-2.php"; ?>

	<div role="main" id="main">

		<div class="inner_page_hero"></div>

		<?php while ( have_posts() ) : the_post(); ?>

			<section class="wrap feature-section">	
				<div class="innerWrap intro">	
					<h2><?php the_field('page_heading'); ?></h2>
					<span class="ace-line"></span>
				    <?php the_content(); ?>			    		    		    	
				</div>
			</section>		

										

		<?php endwhile; // end of the loop.

		get_footer(); ?>
