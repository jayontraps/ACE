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

			<?php get_template_part( 'content', 'page' ); ?>				

		<?php endwhile; // end of the loop. ?>



		<?php get_footer(); ?>
