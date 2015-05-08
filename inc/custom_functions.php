<?php

function enqueue_styles_scripts() { 
	
	wp_enqueue_style( 'ace-style', get_template_directory_uri() . '/build/screen.css', array(), '106' );
	
	wp_enqueue_script( 'ace-modenizr', get_template_directory_uri() . '/js/vendor/modernizr-2.6.2-respond-1.1.0.min.js', array(), false);		

	wp_enqueue_style('gfonts', 'http://fonts.googleapis.com/css?family=Lora|Fjalla+One');

	wp_enqueue_script( 'ace-all', get_template_directory_uri() . '/build/all.js', array('jquery'),'2015', true);	

} 

add_action('wp_enqueue_scripts', 'enqueue_styles_scripts');

// Register custom widget locations
register_sidebar(
	array(
		'name' => __("Footer_items", "ace"),
		'id' => 'footer_widget',
		'description' => 'Contact details, company details etc',
		'before_widget' => "<div class='wrap footer-legals'>",
		'after_widget' => "</div>"
	)
);




//exclude classes categories from widget menu_order<?php
function exclude_widget_categories($args){
$exclude = "1,5,6"; // The IDs of the excluding categories
$args["exclude"] = $exclude;
return $args;
}
add_filter("widget_categories_args","exclude_widget_categories");
?>
