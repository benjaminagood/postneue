$("header a").click(function(){
    $(this).toggleClass( "active" );
    $("#about").toggle();
  });