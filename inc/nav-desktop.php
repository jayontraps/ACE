

<nav role="navigation" class="cf desktop-nav-wrap" id="lg-screen-nav" itemscope itemtype='https://schema.org/SiteNavigationElement' style="display: none;">
    
    <ul class="desktop-nav">
        <li <?php if($page === "home"){echo "class='active'";}; ?>><a href="index.php">Home</a></li>
        <li <?php if($page === "about"){echo "class='active'";}; ?>><a href="about.php">About Us</a></li>
        
        <li class="with-ul <?php if($page === "productions"){echo "active";}; ?>"><a href="productions.php">Productions</a>
            <svg class="icon-keyboard-arrow-down-nav" viewBox="0 0 1024 1024">
                <use xlink:href="#icon-keyboard-arrow-down"></use>
            </svg>          
            <ul>
                <li><a href="prod-mana.php">Mana</a></li>
                <li><a href="prod-ice.php">Ice</a></li>                
                <li><a href="prod-switch.php">Switch</a></li>
                <li><a href="prod-skin.php">Skin</a></li>
            </ul>
        </li>
        
        
        <li <?php if($page === "studio"){echo "class='active'";}; ?>><a href="studio-hire.php">Studio Hire</a></li>  
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
        <li <?php if($page === "gallery"){echo "class='active'";}; ?>><a href="gallery.php">Gallery</a></li>        
        <li <?php if($page === ""){echo "class='active'";}; ?>><a href="https://acedanceandmusic.wordpress.com/">Blog</a></li>         
        <li <?php if($page === "contact"){echo "class='active'";}; ?>><a href="#contact">Contact</a></li>
    </ul>                    
</nav>






