function get_large_slides(context) 
{   

    function successFn (output) {

        console.log("get_large_slides success!");
          
            $('#homewrap').html(output);

            $('.bxslider-home').bxSlider({
                 mode: 'fade',
                 auto: true,
                 pause: 6000,
                 speed: 2000
             });
    }


    function errorFn () {

        console.log("error!");

        $('#spinner').fadeOut('fast', function() { //stop spinner

            $(".result").html("500 Internal Server Error. Please refresh the page.");
            $('#spinner').remove(); //remove spinner

        });    
    }


    function completeFn () {
      console.log("complete!!");
    }
    

    var api = {};

    var search = context;

    if (!api[search]) {

        api[search] = $.ajax({

          type: "POST",
          url: my_ajax_script.ajaxurl,
          data: ({
            res : search, 
            action : 'get_large_slides'}),

          timeout: 15000

        });

    }

    api[search].done(successFn).fail(errorFn).always(completeFn);

}
