// Display Current day
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

var saveBtn = document.querySelector('.saveBtn')
var presentHour = parseInt(moment().format("H"));
console.log(presentHour)
var pastClass = $('.past');
var futureClass = $('.future');
var presentClass = $('.present');


var container = document.querySelector('#container')

console.log(presentHour);
function changeCol () {
    for (var i = 9; i <= 16; i++) {
        var textArea = document.querySelector(`[data-time='${i}']`);
        console.log(textArea.dataset.time)
        if (presentHour == textArea.dataset.time) {
            // Preset
            textArea.classList.remove('past')
            textArea.classList.remove('future')
            textArea.classList.add('present')
        } else if (presentHour < textArea.dataset.time) {
            // Future
            textArea.classList.remove('past')
            textArea.classList.remove('present')
            textArea.classList.add('future')
        } else if (presentHour > textArea.dataset.time) {
            // Past
            textArea.classList.remove('present')
            textArea.classList.remove('future')
            textArea.classList.add('past')
        }
    };
}
changeCol();
setInterval(() => {
        changeCol();   
}, 10000); 

// Click save to save text
container.onclick = function save(e) {
    var etarget = e.target
    if (etarget.className != 'col saveBtn') {
        console.log('not logging')
        return
    }
    var textAreaKey = document.querySelector(`[data-time='${e.target.previousElementSibling.dataset.time}']`);
    localStorage.setItem(e.target.previousElementSibling.dataset.time, textAreaKey.value);
    console.log(textAreaKey.value)
    console.log(localStorage)
}

for (var i = 9; i < 17; i++) {  
    var displayContent = window.localStorage.getItem(`${i}`);
    var textArea = document.querySelector(`[data-time='${i}']`);
    textArea.value = displayContent;
} 