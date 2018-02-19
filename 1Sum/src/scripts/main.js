/**
 * NOTEPAD
 * This allows the user to enter notes by pressing Enter or via Add button
 * Instance variables:
 * note: returns notepad form input
 * input: add note form input
 * notepad: entire note area
 * 
 */
function addNote() {
    var note = $("#home-note-input").val();
    var input = $("home-note-input");
    var notepad = $("#home-notepad");

    if ( note !== "") {
        // add value as list item to notepad
        var elem = $("<li><li>").text(note);
        $(notepad).append(elem);
        // clear input field on keyboard enter or button press enter
        $(input).val("");
        $("#home-form")[0].reset();
    }
}

/* function maxNotes() {
* limit user from submitting more notes than can comfortably fit in 
* the home page notepad
}
*/


// on document ready    
$(function(){
    $("#home-add").on("click", addNote);
    $("input").on("keydown", function(event){
        // returns which keyboard key was pressed for this event
        // 13 is the keycode for Enter
        if (event.which==13){
            event.preventDefault();
            addNote();
        }
    });     
})  