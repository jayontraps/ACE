<?php
/**
 *  template for displaying all pages.
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

	 	 <div id="innerNavWrap" class="sub-nav horizontal" gumby-fixed="top"></div>

		<?php if( have_rows('page_sections') ) {
			include "inc/inc-page-section.php";
		}?>

		<?php if (get_field('include_quotes') ) {
			include "inc/inc-quotes.php"; 
		} ?>


		<?php endwhile; // end of the loop. ?>



		<?php get_footer(); ?>
