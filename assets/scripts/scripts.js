$(".infobttn").click(function(){
    $(".infobox").css("display", "flex");
  });

$(".closebttn").click(function(){
     $(".infobox").css("display", "none");
  });



  $( ".gallery figure" ).click(function() {

    var nextSlide = $(this).next();

    $(this).css("visibility", "hidden");

    if( nextSlide.length == 0 ) {
         // nextSlide = $(this).prevAll('.slide').last();
         $(".gallery figure").first().css("visibility", "visible");

     }
    else {
         $(this).next().css("visibility", "visible");
    }
    });