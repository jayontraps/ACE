<li id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

		<?php 
			$start_date = get_sub_field('start_date');
			$venue_link = get_sub_field('venue_link');
			// $start_date = 19881123 (23/11/1988)
			// extract Y,M,D
			$y = substr($start_date, 0, 4);
			$m = substr($start_date, 4, 2);
			$d = substr($start_date, 6, 2);

			// create UNIX
			$time = strtotime("{$d}-{$m}-{$y}");

			// format date (23/11/1988)
			$start_full = date('jS M Y', $time);
			$start_part = date('jS M', $time);



			// if range of dates
			if(get_sub_field('end_date')) {

				$end_date = get_sub_field('end_date');
				// $end_date = 19881123 (23/11/1988)
				// extract Y,M,D
				$end_y = substr($end_date, 0, 4);
				$end_m = substr($end_date, 4, 2);
				$end_d = substr($end_date, 6, 2);

				// create UNIX
				$end_time = strtotime("{$end_d}-{$end_m}-{$end_y}");

				// format date (23/11/1988)
				$end_res = date('jS M Y', $end_time);


				echo '<div class="date meta_grid">' . $start_part . ' - '. $end_res . '</div>';
			} else {
				echo '<div class="date meta_grid">' . $start_full . '</div>';
			}
		?>		

		<?php if (get_sub_field('venue')) : ?> 	
			
			<div class="meta_grid">

			<?php if( $venue_link ): ?>
				<a href="<?php echo $venue_link; ?>">
			<?php endif; ?>

				<span class="venue"><?php the_sub_field('venue'); ?></span>


			<?php if( $venue_link ): ?>
				</a>
			<?php endif; ?>

			</div>

		<?php endif; ?>




		<?php if (get_sub_field('description')) : ?> 	
			<div class="meta_grid"><?php the_sub_field('description'); ?></div>
		<?php endif; ?>	

</li>