// capture addNote click event
// assign this function to that event
// when the note is added
// the time of the add must be saved
// and the value added to the card footer
function timestamp() {
    var date = newDate(month, day, year, hours, minutes);
    
}
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


