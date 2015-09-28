<?php
/**
 * The header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="content">
 *
 * @package ace
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="http://gmpg.org/xfn/11">
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
<script src="//use.typekit.net/kgz2ghz.js"></script>
<script>try{Typekit.load();}catch(e){}</script>
<?php wp_head(); ?>

</head>

<body <?php body_class(); ?>>

	<div id="load-over-lay"></div>
	<div id="page" class="hfeed site wrap">
	
	<?php include "inc/svg-defs.php"; ?>

	<nav role="navigation" class="cf desktop-nav-wrap" id="lg-screen-nav" itemscope itemtype='https://schema.org/SiteNavigationElement' style="display: none;">
	<?php wp_nav_menu( array( 
	'theme_location' => 'primary',
	'menu_class'      => 'desktop-nav' ) ); ?>
	</nav>

		
	
