// capture addNote click event
// assign this function to that event
// when the note is added
// the time of the add must be saved
// and the value added to the card footer

(function() { //anonymous function - has priority
    'use strict'; // enables built-in jslinting

    // TODO: load empty card graphic instead of spinner of death
    var app = {
       // isLoading = true,
        visibleCards: {},
        spinner: document.querySelector(".spinner"),
        cardTemplate: document.querySelector(".cardTemplate"),
        addDialog: document.querySelector(".dialog-container"),
    }


  /*****************************************************************************
   *
   * Event listeners for UI elements
   *
   ****************************************************************************/
     // Refresh button
    document.getElementById("refresh-btn").addEventListener("click", function() {
      app.updateNotebook();
     });

    // Delete Note button
    document.getElementById("delete-btn").addEventListener("click", function() {
    app.deleteNote();
    });  

     // Create new card button
     document.getElementById("add-Note").addEventListener("click", function() {
    // open the new button dialog-container
    //app.toggleAddNote(false);
        timestamp();
     });
    // Save summary 
     document.getElementById("add-Note").addEventListener("click", function() {
    // save summary to summary page
    });



  /*****************************************************************************
   *
   * Event listeners for UI elements
   *
   ****************************************************************************/
  // Generate editable summary
    document.getElementById("add-Note").addEventListener("click", function() {
        // compile notes into unordered list to show to user
        // open summary card dialog container
        app.toggleAddNote(false);
    });

    function timestamp() {
        var d = new Date();
        var month = d.getMonth();
        var monthNames = ["Jan", "Feb", "March", "April", "May", "June", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        var thisMonth = monthNames[month];
        var date = d.getDate();
        document.getElementById("timestamp").innerHTML = thisMonth + " " + date; 
    }   





}) // end of anonymous function