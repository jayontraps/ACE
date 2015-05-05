<?php 
	$image = get_field('image');

	if( get_field('center_text') ): ?>

		<div class="hero wrap c-c <?php if(get_field('background_position')){the_field('background_position');}; ?>" style="background-image: url('<?php echo $image['url']; ?>');">

			<div class="cover_overlay"></div> 

			<div class="wide-tagline innerWrap">

			<div class="tagline outer"> 
                <div class="inner">
                    <div class="centered">
		                <div class="tagWrap"><?php the_field('page_title'); ?></div>
		                <span class="ace-line"></span>
						<?php if (get_field('sub_title')): ?>
							<div class="subWrap">
								<div class="upright"><?php the_field('sub_title'); ?></div>
							</div> 
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
			        <div class="tagWrap"><?php the_field('page_title'); ?></div>  
					
					<?php if (get_field('sub_title')): ?>
						<div class="subWrap">
			            	<div class="upright"><?php the_field('sub_title'); ?></div>
			        	</div> 
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