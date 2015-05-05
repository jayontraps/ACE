<?php
/**
 * The template for displaying search results pages.
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

		<?php if ( have_posts() ) : ?>

			<header class="page-header">
				<h1 class="page-title"><?php printf( __( 'Search Results for: %s', 'ace' ), '<span>' . get_search_query() . '</span>' ); ?></h1>
			</header><!-- .page-header -->

			<?php /* Start the Loop */ ?>
			<?php while ( have_posts() ) : the_post(); ?>

				<?php
				/**
				 * Run the loop for the search to output the results.
				 * If you want to overload this in a child theme then include a file
				 * called content-search.php and that will be used instead.
				 */
				get_template_part( 'content', 'search' );
				?>

			<?php endwhile; ?>

			<?php the_posts_navigation(); ?>

		<?php else : ?>

			<?php get_template_part( 'content', 'none' ); ?>

		<?php endif; ?>



				</div>

			</div>

			<div class="col-1-3">
				<?php get_sidebar(); ?>
			</div>

		</div><!-- .innerWrap -->

<?php // get_sidebar(); ?>
<?php get_footer(); ?>
