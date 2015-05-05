<?php
/**
 * Template name: Learning
 *
 * @package ace
 */

get_header(); ?>

<div class="wrap">

	<?php include "inc/logo.php"; ?>

	<div role="main" id="main" class="darken-bg">

		<?php while ( have_posts() ) : the_post(); ?>

		<?php
			if (get_field('include_hero_image')) {
				include "inc/inc-hero.php";
			} 
	 	 ?>

		<?php include "inc/inc-education-menu.php"; ?>


		<?php endwhile; // end of the loop. ?>



		<?php get_footer(); ?>
