<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after
 *
 * @package ace
 */
?>

	</div><!-- role="main" -->

   	<nav role="complementary" class="nav-wrap cf js-nav" itemscope itemtype='https://schema.org/SiteNavigationElement'>

		<?php wp_nav_menu( array( 
		'theme_location' => 'primary',
		'menu_class'      => 'navmenu' ) ); ?>

		<?php include "inc/social-nav.php"; ?> 

   	</nav>

   	<footer id="contact" class="footer-container clear">

    <div class="innerWrap">

        <div class="footer-cols cf">
            
            <div class="col-1-2">

                <div class="content">

                    <h2>Follow Us..</h2>

                    <?php include "inc/social-nav.php"; ?>        
                
                </div>

            </div>
            


            <div class="col-1-2">
                <div class="content">
                <h2>Join Our mailing List</h2>                               
                <?php include "inc/mc-signup.php"; ?>
                </div>
        </div>

    </div>


</footer>

<?php
    if ( is_dynamic_sidebar('footer_widget') ) {
        dynamic_sidebar('footer_widget');
    }
    ?><!-- Widget location to hold social icons -->
<!-- 
<div class="wrap footer-legals">
    <div class="innerWrap">
        <ul class="legal-nav">
            <li>Tel: 0121 314 5830</li>
            <li>Fax: 0121 753 1075</li>
            <li>Email: admin@acedanceandmusic.com</li>
        </ul>
    </div>
    
    <div class="innerWrap">
        <ul class="legal-nav">
            <li>Company number – 3471844</li>
            <li>Charity number – 11374490</li>
            <li>VAT number – 906952994</li>
        </ul>
    </div>
</div>
 -->
<div id="backToTop">
    <svg class="icon-keyboard-arrow-up">
        <use xlink:href="#icon-keyboard-arrow-up"></use>
    </svg>             
</div>
	

</div><!-- .wrap -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
