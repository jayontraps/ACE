<?php
	$index = 0;
 	while( have_rows('page_sections') ): the_row(); 

	// vars
	$heading = get_sub_field('heading');
	$content = get_sub_field('content');
	
	
	?>

	<section id="section_<?php echo $index; ?>" class="wrap feature-section" data-innermenu="<?php if (get_sub_field('inner_menu_title')){ the_sub_field('inner_menu_title');}?>">	
		<div class="innerWrap intro <?php if (get_sub_field('center')){ echo 'center';}?>">	
			<h2><?php echo $heading; ?></h2>
			<span class="ace-line"></span>
		    <?php echo $content; ?>
		    

	    	<?php if (get_sub_field('inner_content')) : ?>

				<div class="ace_list">
					<?php the_sub_field('inner_content'); ?>
				</div>

	    	<?php endif; ?>		    	

		</div>

	</section>


<?php 	$index = $index + 1; 
		endwhile; 
?>


