<?php
$args = array (
    'post_type' => 'homepage_slides',
    'posts_per_page' => -1, // show them all?
    'orderby' => 'menu_order',
    'order' => 'ASC'
);

$the_query = new WP_Query( $args ); ?>

<?php if ( $the_query->have_posts() ) : ?>

<div class="home-slides">
	<ul class="bxslider-home">	
		<?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>


<?php 
	$image = get_field('image');

	if( get_field('center_text') ): ?>

		<div class="hero wrap c-c <?php if(get_field('background_position')){the_field('background_position');}; ?>" style="background-image: url('<?php echo $image['url']; ?>');">

			<div class="cover_overlay"></div> 

			<div class="wide-tagline innerWrap">

			<div class="tagline outer"> 
                <div class="inner">
                    <div class="centered">
		                <div class="tagWrap"><?php the_title(); ?></div>

		                <span class="ace-line"></span>

						<?php if (get_field('slide_subtitle')): ?>
							<div class="subWrap">
								<div class="upright"><?php the_field('slide_subtitle'); ?></div>
							</div> 
						<?php endif ?>



						<?php if (get_field('button_text')): ?>
							<a class="ace_more" href="<?php the_field('button_link'); ?>" ><?php the_field('button_text'); ?></a> 
						<?php endif ?>


                    </div>
                </div>  
        	</div>	
		</div>



		<?php else: ?>

			<div class="hero wrap b-l <?php if(get_field('background_position')){the_field('background_position');}; ?>" style="background-image: url('<?php echo $image['url']; ?>');">

				<div class="cover_overlay"></div> 

				<div class="wide-tagline innerWrap">	

				<div class="tagline"> 
			        <div class="tagWrap"><?php the_title(); ?></div>  
					
					<?php if (get_field('slide_subtitle')): ?>
						<div class="subWrap">
			            	<div class="upright"><?php the_field('slide_subtitle'); ?></div>
			        	</div> 
					<?php endif ?>	


					 <?php if (get_field('button_text')): ?>
						<a class="ace_more" href="<?php the_field('button_link'); ?>" ><?php the_field('button_text'); ?></a> 
					<?php endif ?>

			    </div>
			    
			</div>




		<?php endif; ?>


	     


	

	<div class="arrWrap">
	    <a href="#" class="scroll-down">

	    <svg class="icon-keyboard-arrow-down" viewBox="0 0 1024 1024">
	        <use xlink:href="#icon-keyboard-arrow-down"></use>
	    </svg>          

	    </a>                    
	</div>

</div>		

			






		<?php endwhile; ?>
	</ul>
</div>


<?php wp_reset_postdata(); ?>

<?php else : ?>
	<p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>
<?php endif; ?>