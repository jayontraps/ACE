<div id="programme"  class="wrap feature-section">
    <div class="innerWrap medium-width">
        <div class="col-1-3">
            <div class="sidebar-options">

                <div class="sub-nav vertical" gumby-fixed="#programme" gumby-pin="#third" gumby-offset="50px">
                    <ul id="sub-nav" class="">
                        <li><a href="#first">Children and Young People</a></li>
                        <li><a href="#second">ACE Youth</a></li>
                        <li><a href="#third">Get Involved</a></li>
                    </ul>
                </div>  
                
                <div class="space">Keep your options open</div>     
            </div>
        </div>

        <div class="col-2-3 prog-sections">
            
            <section id="first">
                <h3>Children and Young People - Saturday Class Programme</h3>
                
            <?php 
            $args = array(
                'post_type' => 'classes',
                'posts_per_page' => -1,
                'cat' => 5,
                'orderby' => 'menu_order',
                'order'   => 'ASC'
            );
            // the query
            $the_query = new WP_Query( $args ); ?>

            <?php if ( $the_query->have_posts() ) : ?>

                <?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
                    <h4><b><?php the_title(); ?>:</b> <?php if (get_field('age_group')) {the_field('age_group'); echo ", "; };  if (get_field('times')) {the_field('times');}?></h4>
                    <?php if (get_field('content')) {the_field('content');} ?>
                <?php endwhile; ?>

                <?php wp_reset_postdata(); ?>

            <?php else : ?>
                <p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>
            <?php endif; ?>
            
            </section>

            <section id="second">
                <h3>ACE Youth Thursday Class Programme</h3>
                <p>ACE Youth are the youth dance company of ACE dance and music. ACE Youth classes are a mixture of different styles such as contemporary, ballet, African and street style dance. We aim to encourage and inspire young people to have freedom of expression through dance.</p>


                <?php 
            $args = array(
                'post_type' => 'classes',
                'posts_per_page' => -1,
                'cat' => 6,
                'orderby' => 'menu_order',
                'order'   => 'ASC'
            );
            // the query
            $the_query = new WP_Query( $args ); ?>

            <?php if ( $the_query->have_posts() ) : ?>

                <?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
                    <h4><b><?php the_title(); ?>:</b> <?php if (get_field('age_group')) {the_field('age_group'); echo ", "; };  if (get_field('times')) {the_field('times');}?></h4>
                    <?php if (get_field('content')) {the_field('content');} ?>
                <?php endwhile; ?>

                <?php wp_reset_postdata(); ?>

            <?php else : ?>
                <p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>
            <?php endif; ?>

            </section>
            <section id="third">
                <h3>Get Involved</h3>
                <p><a href="mailto:education@acedanceandmusic.com">Contact us</a> for more info.</p>                
            </section>


        </div>
    </div>
</div>