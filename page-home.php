<?php
/**
 * Template name: home
 *
 * @package ace
 */

get_header(); ?>

<div class="wrap">

	<?php include "inc/logo.php"; ?>

	<div role="main" id="main">

		<?php while ( have_posts() ) : the_post(); ?>

			
		<div id="homewrap">		
			<!-- ajax in slides on desktop -->
			<?php
				if (get_field('include_hero_image')) {
					include "inc/inc-hero.php";
				} 
		 	 ?>
	 	</div>
	

	 	 <section id="opening" <?php post_class("wrap feature-section"); ?> data-innermenu="What we do">

	 	 	<div class="innerWrap intro center small-width">
	 	 		<h2>ACE dance and music</h2>
		        <span class="ace-line"></span>
				<?php the_content(); ?>				
			</div>	

		</section>

		<?php include "inc/category-menu.php"; ?> 

		<section class="wrap ambient ambient-1 parallax" gumby-parallax="0.5"></section>

		<?php include "inc/logo-list.php"; ?>




		<?php endwhile; // end of the loop. ?>



		<?php get_footer(); ?>
