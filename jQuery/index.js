

  $(document).ready(function(){
    $('#fadeOut').click(function(){
      $('header h1').fadeOut('slow', function(){

      });
    });

    $('#fadeIn').click(function(){
      $('header h1').fadeIn('slow', function(){

      });
    });
      $('figure').click(function(){
        if ($('figure').("slideUp")){
          console.log(event);
          $('figure').slideDown('slow');
        } else{
        $('figure').slideUp();
            }
        });


      });
