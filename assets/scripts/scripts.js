$(".infobttn").click(function(){
    $(".infobox").css("display", "flex");
  });

$(".closebttn").click(function(){
     $(".infobox").css("display", "none");
  });

  
// $( ".gallery figure" ).click(function() {

//      var nextSlide = $(this).next();

//      $(this).fadeOut();

//      if( nextSlide.length == 0 ) {
//           $(".gallery figure").first().fadeIn();
//      }
//      else {
//           $(this).next().fadeIn();
//      }
// });
 

$( ".prev" ).on("click", function() {

     var $this = $(this);

     $this.attr('disabled', true); 

     var lastSlide = $(".gallery figure:visible").prev();

     $(".gallery figure:visible").fadeOut(250);

     if( lastSlide.length == 0 ) {
          $(".gallery figure").last().fadeIn(250);
     }
     else {
          $(".gallery figure:visible").prev().fadeIn(250);
     }

     setTimeout(function() { 
          $this.attr('disabled', false);
      }, 260);

 });


$( ".next" ).click(function() {

     var $this = $(this);

     $this.attr('disabled', true); 

     var nextSlide = $(".gallery figure:visible").next();

     $(".gallery figure:visible").fadeOut(250);

     if( nextSlide.length == 0 ) {
          $(".gallery figure").first().fadeIn(250);
     }
     else {
          $(".gallery figure:visible").next().fadeIn(250);
     }

     setTimeout(function() { 
          $this.attr('disabled', false);
      }, 260);

});