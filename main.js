// this is a simple jQuery function that will make the button in our html do something when the page loads, and again do something when the button is clicked.
// You can generally recognise jQuery by the use of a dollar sign before the first function name you see

$(function(){
  // this next line of code makes our website print the text "Pageload Dummy Text" as soon as the page is loaded 
  // our index.html file named a certain paragraph with the id="output", therefore we can print things there using the selector "#output" in jQuery
  $( "#output" ).text('Pageload Dummy Text');
    // these next lines of code make our website do something when the button is clicked
    // because our index.html gave the button the id "action_button", we can select it using jQuery by writing "#action_button"
      $( "#action_button" ).click(function(){
        $( "#output" ).text('Mouseclick Dummy Text');       
      });
});
