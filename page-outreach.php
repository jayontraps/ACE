<?php
/**
 * Template name: Outreach Programme
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
		
			<div class="innerWrap medium-width">

				<?php if (get_field('page_heading')) :?>
					<h2><?php the_field('page_heading') ?></h2>
				<?php endif; ?>
				<span class="ace-line"></span>
				<?php the_content(); ?>	

			</div>

		</section>	

		<?php include "inc/inc-programme-1.php"; ?>	

		<?php if (get_field('include_quotes') ) {
			include "inc/inc-quotes.php"; 
		} ?>	

		<?php endwhile; // end of the loop. ?>



		<?php get_footer(); ?>
