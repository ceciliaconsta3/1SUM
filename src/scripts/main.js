/**
 * NOTEPAD
 * This allows the user to enter notes by pressing Enter or via Add button
 * Parameter variables:
 * note: returns notepad form input
 * input: add note form input
 * notepad: entire note area
 * testing
 */

// on document ready    
$(function(){
    $("#home-add").on("click", addNotes);
    $("#home-clear").on("click", function() {
        $("#home-card").empty();
    });
    $("input").on("keydown", function(event){
        // returns which keyboard key was pressed for this event
        // 13 is the keycode for Enter
        if (event.which==13){
            event.preventDefault();
            addNotes();
        }
    });     
})  

function addNotes() {
    var note = $("#home-note-input").val();
    var notepad = $("#home-card");

    if ( note != "") {
        var elem = $("<li></li>").text(note);
        $(notepad).append(elem);
        // clear input field on keyboard enter or button press enter
        $("#home-form")[0].reset();
    }
}



/* function maxNotes() {
* limit user from submitting more notes than can comfortably fit in 
* the home page notepad
}
*/


// FROM examples sheet
// $('form').submit( function(e) {
// 	e.preventDefault();
//   // Display name of user along with thank you message
//   let name = $('.formInput[name="name"]').val();
//   let message = "Thanks for signing up!"
//   // Add a user's name if they've inputted it
//   if (name!=="") {
//     message = "Thanks for signing up, " + name + "!";  
//   }
//   // Fade out the main form elements upon the initial submit
//   $('.formInput').fadeOut(500);
//   $('button[type="submit"]').fadeOut(500, () => {
//     // Fade in the spinner component
//     $('.newsletter-success').fadeIn(500);
//     // Start the spinner animation
//     $(".spinner").css({
//        'animation': 'spinner 2s 0s linear'
//      });
//     // Actions performed once spinner has finished spinning
//     setTimeout( () => {
//       // Fade the checkmark into the spinner
//       $('i.fa-check').fadeIn(500, () => {
//         // Wait 500ms
//         setTimeout( () => {
//           // Fade the spinner and checkmark out
//           $('.spinner').fadeOut(500, () => {
//           // Append the message and fade it in
//             $(".newsletter-success").append($('<p>').text(message).fadeIn(500));
//           });
//         }, 500)
//       }); 
//     }, 2200);
//   });
// });
