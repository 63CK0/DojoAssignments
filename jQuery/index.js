

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
          $('figure').slideUp('slow', function() {
            setTimeout(function() {
              $('figure').slideDown('slow');
            }, 1000);
          });
        });


      });
