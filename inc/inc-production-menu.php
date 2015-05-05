<section id="opening" class="wrap ">
	<div class="options-grid productions">



<?php if( have_rows('menu_item') ): ?>

	<?php while( have_rows('menu_item') ): the_row(); 

		$image = get_sub_field('image');
		$prod_title = get_sub_field('prod_title');
		$link = get_sub_field('link');
		$dates = get_sub_field('dates');

		?>

		<div class="row row-1 <?php if( get_sub_field('is_current')) {echo 'current';} ?>">
			<div class="col option-thumb">

			<div class="image"><img src="<?php echo $image['url']; ?>" alt="spacer image"></div>

				<!-- <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt'] ?>" /> -->

				<div class="container">
	              <div class="outer">
	                <div class="inner">
	                  <div class="centered">
	                  	<h3><?php echo $prod_title; ?></h3>

						<?php if( get_sub_field('is_current') ): ?>
							<span class="ace-line"></span>
			                <h4>Current production</h4>
			            <?php elseif ($dates) : ;?>
			            	<h4><?php echo $dates; ?></h4>
						<?php endif; ?>

						<?php if( $link ): ?>
							<a href="<?php the_sub_field('link'); ?>">Explore</a>
						<?php endif; ?>

						</div>
	                </div>
	              </div>
	            </div>
			</div>

		</div>

	<?php endwhile; ?>

<?php endif; ?>


<!-- 		
		<div class="row row-1">
			<div class="col option-thumb">
				
				<div class="image"><img src="<?php echo get_stylesheet_directory_uri(); ?>/img/production/mana-compressor.jpg" alt="spacer image"></div>


	            <div class="container">
	              <div class="outer">
	                <div class="inner">
	                  <div class="centered">
	                    <h3>mana</h3> 
	                    <span class="ace-line"></span>
	                    <h4>Current production</h4>		                     
	                    <a href="prod-mana.php">Explore</a>
	                  </div>
	                </div>
	              </div>
	            </div>
			</div>

		</div>

 -->

		<div class="row row-2">
			<div class="col option-thumb">
				
				<div class="image"><img src="<?php echo get_stylesheet_directory_uri(); ?>/img/production/ice-compressor.jpg" alt="spacer image"></div>


	            <div class="container">
	              <div class="outer">
	                <div class="inner">
	                  <div class="centered">
	                    <h3>ice</h3> 
	                    <h4>2011-2012</h4>		                     
	                    <a href="<?php bloginfo('url'); ?>/production/ice/">Explore</a>
	                  </div>
	                </div>
	              </div>
	            </div>

			</div>
			<div class="col option-thumb">
				
				<div class="image"><img src="<?php echo get_stylesheet_directory_uri(); ?>/img/production/switch-2-compressor.jpg" alt="spacer image"></div>


	            <div class="container">
	              <div class="outer">
	                <div class="inner">
	                  <div class="centered">
	                    <h3>switch</h3> 	
	                    <h4>2009-2010</h4>	                     
	                    <a href="<?php bloginfo('url'); ?>/production/switch/">Explore</a>
	                  </div>
	                </div>
	              </div>
	            </div>
			</div>
		</div>

		<div class="row row-3">

			

			<div class="col option-thumb">
				
				<div class="image"><img src="<?php echo get_stylesheet_directory_uri(); ?>/img/production/skin-compressor.jpg" alt="spacer image"></div>


	            <div class="container">
	              <div class="outer">
	                <div class="inner">
	                  <div class="centered">
	                    <h3>skin</h3> 
	                    <h4>2007-2008</h4>		                     
	                    <a href="<?php bloginfo('url'); ?>/production/skin/">Explore</a>
	                  </div>
	                </div>
	              </div>
	            </div>

			</div>

			<div class="col option-thumb">
				
				<div class="image"><img src="<?php echo get_stylesheet_directory_uri(); ?>/img/production/real-compressor.jpg" alt="spacer image"></div>


	            <div class="container">
	              <div class="outer">
	                <div class="inner">
	                  <div class="centered">
	                    <h3>real</h3> 		                     
	                    <a target="_blank" href="<?php bloginfo('url'); ?>/downloads/Programmelayout.pdf">Explore</a>
	                  </div>
	                </div>
	              </div>
	            </div>

			</div>

			<div class="col option-thumb">
				
				<div class="image"><img src="<?php echo get_stylesheet_directory_uri(); ?>/img/production/en-trance-compressor.jpg" alt="spacer image"></div>


	            <div class="container">
	              <div class="outer">
	                <div class="inner">
	                  <div class="centered">
	                    <h3>en-trance</h3> 
	                    <h4>2007-2008</h4>		                     
	                    <a target="_blank" href="<?php bloginfo('url'); ?>/downloads/FinalEnTranceA5prog04.pdf">Explore</a>
	                  </div>
	                </div>
	              </div>
	            </div>

			</div>
		</div>	
	</div>

</section>