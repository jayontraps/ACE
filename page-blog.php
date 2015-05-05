<?php
/**
 * Template name: Blog page
 *
 * @package ace
 */
get_header(); ?>

<div class="wrap template_2">

	<?php include "inc/logo-2.php"; ?>

	<div role="main" id="main" class="blog-pages">

		<div class="inner_page_hero"></div>

		<div class="innerWrap">

			<div class="col-2-3">	
				<div class="content-blog">			
					<?php include "inc/inc-news-list.php"; ?>
				</div>
			</div>

			<div class="col-1-3">
				<?php get_sidebar(); ?>
			</div>

		</div><!-- .innerWrap -->


		<?php get_footer(); ?>
