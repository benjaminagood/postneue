$("header a").click(function(){
    $(this).toggleClass( "active" );
    $("#about").toggle();
  });


  // $("li").hover(function(){
  //   var color = $(this).data();
  //   console.log(color);
  //   // $("body").css("background-color", value);
  // });

//   $("li").hover(function() {
//     var newColor = $(this).data("bgcolor");
//     $("body").css("background-color", newColor);
// })	