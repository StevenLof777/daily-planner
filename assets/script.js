// Display Current day
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

var presentTime = moment();


// Make a function that switches colors depending on hour
function hourOfDay() {
    if (presentTime === hourRow) {
        // remove past class
        // remove future class
        // add present class to the row
    } else if (presentTime < hourRow) {
        // remove present class
        // remove past class
        // add future class to the row
    } else if (presentTime > hourRow){
        // remove present class
        // remove future class
        // add past class
    }
    return hourRow
}

// Make a function that stores text in local storage
function plans () {
    
}