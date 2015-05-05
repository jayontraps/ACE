<?php
/**
 * Template name: ACE Youth
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

		<section id="opening" class="wrap feature-section" data-innermenu="ACE youth">	
			<div class="innerWrap intro center">	
				<h2><?php the_field('page_heading'); ?></h2>
				<span class="ace-line"></span>
			    <?php the_content(); ?>			    		    		    	
			</div>
		</section>

		<?php 
            $args = array(
                'post_type' => 'classes',
                'posts_per_page' => -1,
                'cat' => 6,
                'orderby' => 'menu_order',
                'order'   => 'ASC'
            );

            $the_query = new WP_Query( $args ); ?>

            <?php if ( $the_query->have_posts() ) : ?>

            <section id="second" class="wrap feature-section" data-innermenu="Programme">
    		<div class="innerWrap small-width">
    			<div class="schedule">

                <?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
					<div class="schedule-item">
	                    <h3><b><?php the_title(); ?>:</b> <?php if (get_field('age_group')) {the_field('age_group');}; ?></h3>
	                    <h3 class="ace-inset"><?php if (get_field('times')) {the_field('times');} ?></h3>                    
						<div class="ace-inset"><?php if (get_field('content')) {the_field('content');} ?></div>
					</div>
                <?php endwhile; ?>

            	</div>			
					
			</div>    		
    		</section>

            <?php wp_reset_postdata(); ?>

            <?php else : ?>
                <p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>
            <?php endif; ?> 





		<?php if( have_rows('page_sections') ) {
			include "inc/inc-page-section.php";
		}?>

		<?php if (get_field('include_quotes') ) {
			include "inc/inc-quotes.php"; 
		} ?>


		<?php endwhile; // end of the loop. ?>



		<?php get_footer(); ?>
