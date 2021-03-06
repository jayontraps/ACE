<?php
/**
 * @package ace
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<header class="entry-header">
		<?php the_title( sprintf( '<h2 class="entry-title"><a href="%s" rel="bookmark">', esc_url( get_permalink() ) ), '</a></h2>' ); ?>

		<?php if ( 'post' == get_post_type() ) : ?>
		<div class="entry-meta">
			<?php ace_posted_on(); ?>
		</div><!-- .entry-meta -->
		<?php endif; ?>
	</header><!-- .entry-header -->

	<div class="entry-content">
		<?php
			the_excerpt();
			// /* translators: %s: Name of current post */
			// the_content( sprintf(
			// 	__( 'Continue reading %s <span class="meta-nav">&rarr;</span>', 'ace' ),
			// 	the_title( '<span class="screen-reader-text">"', '"</span>', false )
			// ) );
		?>
		<a class="blog_link" href="<?php the_permalink() ?>">View Full Article ></a>


		<?php
			wp_link_pages( array(
				'before' => '<div class="page-links">' . __( 'Pages:', 'ace' ),
				'after'  => '</div>',
			) );
		?>
	</div><!-- .entry-content -->
<!-- 
	<footer class="entry-footer">
		<?php // ace_entry_footer(); ?>
	</footer>
 -->

</article><!-- #post-## -->