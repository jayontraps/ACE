<nav role="complementary" class="nav-wrap cf js-nav" itemscope itemtype='https://schema.org/SiteNavigationElement'>

    <ul class="navmenu">
        <li <?php if($page === "about"){echo "class='active'";}; ?>><a href="about.php">About Us</a></li>
        <li <?php if($page === "gallery"){echo "class='active'";}; ?>><a href="gallery.php">Gallery</a></li>
        <li <?php if($page === "productions"){echo "class='active'";}; ?>><a href="productions.php">Productions</a></li>
        <li <?php if($page === "education"){echo "class='active'";}; ?> class="with-ul"><a href="education.php">Learning &amp; Participation</a>
            <svg class="icon-keyboard-arrow-down-nav" viewBox="0 0 1024 1024">
                <use xlink:href="#icon-keyboard-arrow-down"></use>
            </svg>          

            <ul>
                <li <?php if($page === "outreach"){echo "class='active'";}; ?>><a href="outreach.php">Outreach programme</a></li>
                <li <?php if($page === "inhouse"){echo "class='active'";}; ?>><a href="inhouse.php">ACE classes</a></li>
                              
            </ul>
        </li>
        <li <?php if($page === "youth"){echo "class='active'";}; ?>><a href="youth.php">Ace Youth</a></li>
        <li <?php if($page === "studio"){echo "class='active'";}; ?>><a href="studio-hire.php">Studio Hire</a></li>            
        <li <?php if($page === ""){echo "class='active'";}; ?>><a href="https://acedanceandmusic.wordpress.com/">Blog</a></li>        
    </ul>
                    
    
    <?php include "inc/social-nav.php"; ?>  
</nav>



