

/**
 * Cover/home page notepad
 * This allows the user to enter notes by pressing Enter
 * 
 */

function addNote () {
    var note = $("note-input").val();
    var notepad = $("home-notepad");
    // get note input field
    // get ul from notepad
    // add note input as list item to note card
    if ( note !== "") {
        // add value as list item to notepad
        var elem = $("<li><li>").text(val);
        append(elem).notepad;
    }
    // clear input field on keyboard enter or button press enter
}

function maxNotes () {
    // set max number if notes in notecard to 10
}

$("home-add").on("click", addNote());