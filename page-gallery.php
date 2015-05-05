<?php
/**
 * Template name: Gallery
 *
 * @package ace
 */

get_header(); ?>

<div class="wrap">

	<?php include "inc/logo.php"; ?>

	<div role="main" id="main">

		<?php while ( have_posts() ) : the_post(); ?>

		<?php
			if (get_field('include_hero_image')) {
				include "inc/inc-hero.php";
			} 
	 	 ?>

		<div id="opening">
			<?php include "inc/inc-video-menu.php"; ?>	
		</div>


		<?php endwhile; // end of the loop. ?>



		<?php get_footer(); ?>
