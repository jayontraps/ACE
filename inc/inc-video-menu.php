<?php

    $rows = get_field('video_menu' ); // get all the rows

?>


<section class="wrap feature-section">

    <div class="innerWrap category_title intro">

        <h2>Watch the trailers</h2>

         <svg class="downUnderLine" viewBox="0 0 99 18.463">
            <use xlink:href="#arr-border"></use>
        </svg> 

    </div>  




    <div class="video-thumbs-3"> 

        <div class="wrap">

            <div class="col-1-3">  

                <div class="v-thumb-wrap " >                                                

                    <div class="modal" id="ice">
                      <div class="content">
                        <a href="#" class="close switch">
                        <svg class="wrap-close" viewBox="0 0 48 48">
                            <use xlink:href="#close"></use>
                        </svg>                    
                        </a>
                        <div class="row">
                            <div id="vid-ice">
                                <iframe width="560" height="315" src="<?php echo $rows[0]['video_embed']; ?>" frameborder="0" allowfullscreen></iframe>
                            </div>
                        </div>
                      </div>
                    </div>                            
                    
                    
                    <div class="v-thumb switch">

                        <div class="container">
                          <div class="outer">
                            <div class="inner">
                              <div class="centered">

                                <h2><?php echo $rows[0]['title']; ?></h2>
                                <span class="ace-line"></span>
                            
                                <svg class="play-sm" viewBox="0 0 321 321">
                                    <use xlink:href="#play-lg"></use>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>

                        <img class="v-img" src="<?php echo $rows[0]['image']['url']; ?>">

                    </div> 

                </div>    

            </div><!-- .col-1-2 -->



            <div class="col-1-3">


                <div class="v-thumb-wrap " >                     
                    
                    <div class="modal" id="mana">
                        <div class="content">
                            <a href="#" class="close switch">
                                <svg class="wrap-close" viewBox="0 0 48 48">
                                    <use xlink:href="#close"></use>
                                </svg>                        
                            </a>
                        <div class="row">
                            <div id="vid-mana">
                                <iframe src="<?php echo $rows[1]['video_embed']; ?>" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>     
                            </div>
                        </div>
                        </div>
                    </div>   


                    <div class="v-thumb switch">
                        <div class="container">
                          <div class="outer">
                            <div class="inner">
                              <div class="centered">


                                <h2><?php echo $rows[1]['title']; ?></h2>
                            <span class="ace-line"></span>
                                <svg class="play-sm" viewBox="0 0 321 321">
                                    <use xlink:href="#play-lg"></use>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>

                        <img src="<?php echo $rows[1]['image']['url']; ?>">
                    </div>
              
                                                          
                </div> 

            </div><!-- .col-1-2 -->




            <div class="col-1-3">

                <div class="v-thumb-wrap " >                     
                    
                    <div class="modal" id="skin">
                        <div class="content">
                            <a href="#" class="close switch">
                                <svg class="wrap-close" viewBox="0 0 48 48">
                                    <use xlink:href="#close"></use>
                                </svg>                        
                            </a>
                        <div class="row">
                            <div id="vid-skin">
                                <iframe width="560" height="315" src="<?php echo $rows[2]['video_embed']; ?>" frameborder="0" allowfullscreen></iframe>
                            </div>                            

                        </div>
                        </div>
                    </div>                            

                    <div class="v-thumb switch">
                        <div class="container">
                          <div class="outer">
                            <div class="inner">
                              <div class="centered">
                                
                            <h2><?php echo $rows[2]['title']; ?></h2>
                            <span class="ace-line"></span>

                                <svg class="play-sm" viewBox="0 0 321 321">
                                    <use xlink:href="#play-lg"></use>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <img src="<?php echo $rows[2]['image']['url']; ?>">
                    </div>
                      


                </div>                

            </div><!-- .col-1-2 -->
   

        </div> <!-- .wrap -->           



        <div class="wrap">

            <div class="col-1-2">

                <div class="v-thumb-wrap " >                     
                                    
                    <div class="modal" id="switch">
                        <div class="content">
                            <a href="#" class="close switch">
                                <svg class="wrap-close" viewBox="0 0 48 48">
                                    <use xlink:href="#close"></use>
                                </svg>                        
                            </a>
                        <div class="row">
                            <div id="vid-switch">
                                <iframe width="560" height="315" src="<?php echo $rows[3]['video_embed']; ?>" frameborder="0" allowfullscreen></iframe>
                            </div>                            
                        </div>
                        </div>
                    </div> 


                     <div class="v-thumb switch">
                        <div class="container">
                          <div class="outer">
                            <div class="inner">
                              <div class="centered">
                                
                            <h2><?php echo $rows[3]['title']; ?></h2>
                            <span class="ace-line"></span>

                                <svg class="play-sm" viewBox="0 0 321 321">
                                    <use xlink:href="#play-lg"></use>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <img src="<?php echo $rows[3]['image']['url']; ?>">
                    </div>


                </div>    

            </div>


        
            <div class="col-1-2">

                <div class="v-thumb-wrap " >                     


                    <div class="modal" id="youth">
                        <div class="content">
                            <a href="#" class="close switch">
                                <svg class="wrap-close" viewBox="0 0 48 48">
                                <use xlink:href="#close"></use>
                                </svg>                        
                            </a>
                            <div class="row">
                                <div id="vid-youth">
                                    <iframe width="560" height="315" src="<?php echo $rows[4]['video_embed']; ?>" frameborder="0" allowfullscreen></iframe>
                                </div>                                
                            </div>
                        </div>
                    </div>                            

                    <div class="v-thumb switch">
                        <div class="container">
                          <div class="outer">
                            <div class="inner">
                              <div class="centered">
                                
                            <h2><?php echo $rows[4]['title']; ?></h2>
                            <span class="ace-line"></span>

                                <svg class="play-sm" viewBox="0 0 321 321">
                                    <use xlink:href="#play-lg"></use>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <img src="<?php echo $rows[4]['image']['url']; ?>">
                    </div>
                     


                </div> 

            </div>

        </div><!-- .wrap -->  
    
    </div><!-- .video-thumbs-3 -->


</section>