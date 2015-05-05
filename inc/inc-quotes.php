<section id="prog-testimonials" class="wrap feature-section" data-innermenu="What they are saying">

	<div class="quote-slides">

	<div class="innerWrap">

	<div class="innerWrap intro center">
	    <h2><?php the_field('quote_section_title'); ?></h2>
	   <svg class="downUnderLine" viewBox="0 0 99 18.463">
	      <use xlink:href="#arr-border"></use>
	  </svg> 
	</div>

	<?php if( have_rows('quote_fields') ): ?>

	<ul class="bxslider-quotes">

		<?php while( have_rows('quote_fields') ): the_row(); 

		// vars
		$quotaton = get_sub_field('quotaton');
		$cite = get_sub_field('cite');

		?>

	    <li>
			<div class="outer">
				<div class="inner">

					<div class="centered">

	            	<div class="quote-block">
					<svg class="icon icon-quote"><use xlink:href="#icon-quote"></use></svg>
					<blockquote class="ace-quote"><?php echo $quotaton;?></blockquote>
					<p class="credit"><?php echo $cite;?></p>
					</div>	

						
					</div>
				</div>
			</div>
	    </li>
	             
		<?php endwhile; ?>

	</ul>

	<?php endif; ?>                   

	</div>  

	</div>

</section>