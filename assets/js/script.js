var currentDayEl = $("#currentDay");
var date = Date()

var displayDate = function() {
    currentDayEl.text(date);
}


displayDate();