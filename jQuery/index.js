
$(document).ready(function(){
  $('#fadeOut').click(function(){
    $('header h1').fadeOut('slow', function(){

    });
  });

  $('#fadeIn').click(function(){
    $('header h1').fadeIn('slow', function(){

    });
  });
  $('#heisencat').click(function(){
        $('#heisencat').slideUp(100, function() {
          setTimeout(function() {
            $('#heisencat').slideDown(100);
          }, 1000);
        });
      });


    $('#cat').after("<b>Google Links</b>");
    $('#toggle').click(function()
      {
        $('#links').toggle(1000);
      });




    $('ul').hover(function() {
      $(this).append("<li>Google ME</li>") ; }, function ()
      {
        $(this).find("li:last").remove();
      }
    );

    $('input[type=checkbox]').change

    )})

    });
