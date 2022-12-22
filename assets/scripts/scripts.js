$("header a").click(function(){
    $(this).toggleClass( "active" );
    $(".infobox").toggle();
  });



  $( ".gallery figure" ).click(function() {

    var nextSlide = $(this).next();

    $(this).css("display", "none");

    if( nextSlide.length == 0 ) {
         // nextSlide = $(this).prevAll('.slide').last();
         $(".gallery figure").first().css("display", "block");

     }
    else {
         $(this).next().css("display", "block");
    }
    });