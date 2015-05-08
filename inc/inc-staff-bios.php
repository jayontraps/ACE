<?php if( have_rows('staff_bio') ): ?>

<section id="third" class="wrap timeline feature-section">

	<div class="innerWrap center">
        <h2>Meet the team</h2>
		<span class="ace-line"></span>
	</div>		
    		
	    

	<div class="innerWrap center">
		<ul class="staff-bios">

	<?php while( have_rows('staff_bio') ): the_row(); 

		// vars
		$image = get_sub_field('image');
		$staff_name = get_sub_field('staff_name');
		$role = get_sub_field('role');
		$short_bio = get_sub_field('short_bio');
		$email_address = get_sub_field('email_address');

		?>

		<li class="slide">

			<img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt'] ?>" />
			<div class="staff-name"><?php echo $staff_name; ?></div>
			<span class="ace-line"></span>
			<div class="staff-role"><?php echo $role; ?></div>
			<div class="staff-bio">
				<?php echo $short_bio; ?>

				<?php if( $email_address ): ?>
					<a href="mailto:<?php echo $email_address; ?>">
				<?php endif; ?>

					<?php echo $email_address; ?>

				<?php if( $email_address ): ?>
					</a>
				<?php endif; ?>
			</div>

		</li>

	<?php endwhile; ?>

		</ul>
	</div>
</section>

<?php endif; ?>