// this is a simple jQuery function that will make the button in our html do something when the page loads, and again do something when the button is clicked.
// You can generally recognise jQuery by the use of a dollar sign before the first function name you see

$(function(){
  // because our index.html gave the button the id "action_button", we can select it using jQuery by writing "#action_button"
  $("#action_button").click(function(){
    $("#output").text(print_aphorism());
  });
  // prints an aphorism on mouse-click
  $( "#refresh_button" ).trigger( "click" );
