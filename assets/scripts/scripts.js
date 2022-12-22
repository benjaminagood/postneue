$(".infobttn").click(function(){
    $(".infobox").css("display", "flex");
  });

$(".closebttn").click(function(){
     $(".infobox").css("display", "none");
  });



// $( ".gallery figure" ).click(function() {

//      var nextSlide = $(this).next();

//     $(this).css("visibility", "hidden");

//      if( nextSlide.length == 0 ) {
//          $(".gallery figure").first().css("visibility", "visible");
//      }
//      else {
//          $(this).next().css("visibility", "visible");
//      }
// });


// $( ".gallery figure" ).click(function() {

//      var nextSlide = $(this).next();

//      $(this).css({
//           opacity          : 0,
//           WebkitTransition : 'opacity 1s ease-in-out',
//           MozTransition    : 'opacity 1s ease-in-out',
//           MsTransition     : 'opacity 1s ease-in-out',
//           OTransition      : 'opacity 1s ease-in-out',
//           transition       : 'opacity 1s ease-in-out'
//      });

//      if( nextSlide.length == 0 ) {
//          $(".gallery figure").first().css({
//                opacity          : 1,
//                WebkitTransition : 'opacity 1s ease-in-out',
//                MozTransition    : 'opacity 1s ease-in-out',
//                MsTransition     : 'opacity 1s ease-in-out',
//                OTransition      : 'opacity 1s ease-in-out',
//                transition       : 'opacity 1s ease-in-out'
//      });
//      }
//      else {
//          $(this).next().css({
//                opacity          : 1,
//                WebkitTransition : 'opacity 1s ease-in-out',
//                MozTransition    : 'opacity 1s ease-in-out',
//                MsTransition     : 'opacity 1s ease-in-out',
//                OTransition      : 'opacity 1s ease-in-out',
//                transition       : 'opacity 1s ease-in-out'
//      });
//      }
// });


$( ".gallery figure" ).click(function() {

     var nextSlide = $(this).next();

     $(this).fadeOut();

     if( nextSlide.length == 0 ) {
          $(".gallery figure").first().fadeIn();
     }
     else {
          $(this).next().fadeIn();
     }
});