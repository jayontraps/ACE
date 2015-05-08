<?php
/**
 * The template for displaying all production posts
 *
 * @package ace
 */

get_header(); ?>



<div class="wrap">

	<?php include "inc/logo.php"; ?>

	<div role="main" id="main" class="darken-bg">

		<?php while ( have_posts() ) : the_post(); 
			$image = get_field('image');
		?>

		<div class="hero wrap c-c <?php if(get_field('dark_text')){echo 'light';}; ?>" style="background-image: url('<?php echo $image['url']; ?>');"> 
	    	<div class="cover_overlay"></div>   
	        <div class="wide-tagline innerWrap">
	            <div class="tagline outer"> 
	                <div class="inner">
	                    <div class="centered">
			                <div class="tagWrap">
			                   <?php the_title();?>
			                </div>  

			                <span class="ace-line"></span>

					        <svg class="play-lg switch-prod" viewBox="0 0 321 321">
					            <use xlink:href="#play-lg"></use>
					        </svg> 

			                <div class="subWrap prod-subWrap">
			                    <?php the_field('sub_heading'); ?>
			                </div>  	                        
	                    </div>
	                </div>  
	        	</div>  
	    	</div>
	        <div class="arrWrap">
	            <a href="#" class="scroll-down">
		            <svg class="icon-keyboard-arrow-down" viewBox="0 0 1024 1024">
		                <use xlink:href="#icon-keyboard-arrow-down"></use>
		            </svg>          
	            </a>                    
	        </div>
	    </div> 


	    <section id="opening" class="wrap dark prod-section">
			<div class="innerWrap medium-width">
				<div class="col col-2-5">	
					<?php if( have_rows('left_column_quotes') ): ?>

						<?php while( have_rows('left_column_quotes') ): the_row(); ?>

							<div class="quote-block">
								<svg class="icon icon-quote"><use xlink:href="#icon-quote"></use></svg>
								<blockquote class="ace-quote"><?php the_sub_field('quote');?></blockquote>
								<p class="credit"><?php the_sub_field('cite');?></p>			
							</div>

						<?php endwhile; endif; ?>
				</div>


			<div class="col col-3-5 summary">
				<?php the_content(); ?>
			</div>
		</div>
	</section>



<?php if( have_rows('image_slides') ): ?>

	<section class="wrap production-slides">
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


<?php if( have_rows('tour_date') ): ?>

	<section class="wrap dark prod-section">
		<div class="innerWrap small-width">
			<h2>Tour Dates</h2>
			<span class="ace-line"></span>

	        <ul class="tour-dates">

			<?php while( have_rows('tour_date') ): the_row(); 
				include "inc/inc-tour-list.php"; 
			 	endwhile; 
		 	?>

			</ul>
		</div>
	</section>

<?php endif; ?>




<?php if( have_rows('quote_block') ): ?>

	<section class="wrap prod-section feature-section">
		<div class="innerWrap">
			<div class="innerWrap small-width">

			<?php while( have_rows('quote_block') ): the_row(); 
				$image = get_sub_field('image');
			?>

				<div class="quote-block">
					<svg class="icon icon-quote"><use xlink:href="#icon-quote"></use></svg>
					<blockquote class="ace-quote summary"><?php the_sub_field('quote');?></blockquote>
					<p class="credit"><?php the_sub_field('cite');?></p>
				</div>	


			<?php endwhile; ?>

			</div>
		</div>
	</section>

<?php endif; ?>



<?php if (get_field('include_quotes') ) {
	include "inc/inc-quotes.php"; 
} ?>



<?php if(get_field('video_embed_code')) : ?>

	<div id="modal" class="modal">
        <div class="content">			                        	
            <a href="#" class="close">
                <svg class="wrap-close" viewBox="0 0 48 48"><use xlink:href="#close"></use></svg>                        
            </a>

            <div class="row">
            	<iframe width="560" height="315" src="<?php the_field('video_embed_code'); ?>" frameborder="0" allowfullscreen></iframe>
            </div>					                
    	</div>
	</div> 

<?php endif; ?>



		

	<?php endwhile; // end of the loop. ?>

	<?php get_footer(); ?>
