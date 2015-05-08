<?php
/**
 * Template name: Gallery
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


		<?php if( have_rows('image_slides') ): ?>

			<section class="wrap production-slides dark">
			    <div class="innerWrap medium-width">
			        <ul class="bxslider">

					<?php while( have_rows('image_slides') ): the_row(); 
						$image = get_sub_field('image');
					?>

						<li><img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt'] ?>" /></li>		

					<?php endwhile; ?>

					</ul>
				</div>
			</section>

		<?php endif; ?>	



		<div class="dark">
			<?php include "inc/inc-video-menu.php"; ?>	
		</div>

			


		<?php endwhile; // end of the loop. ?>



		<?php get_footer(); ?>
