var currentDayEl = $("#currentDay");
var dateToday = moment()
var timeblockEl = $("#timeblocks");
var nineEl = $("#9AM");
var tenEl = $("#10AM");
var elevenEl = $("#11AM");
var twelveEl = $("#12PM");
var oneEl = $("1PM");
var twoEL = $("2PM");
var threeEl = $("3PM");
var fourEl = $("4PM");
var fiveEl = $("5PM");
var tasks = {};
currentDayEl.text(dateToday);

// create time blocks for standard business hours
// create color-coded time blocks for past-present-future
// form handling for each time block
// functions to save items into localStorage

var addTask = function() {
    document.getElementById("submit-9").addEventListener("click", function(event) {
        event.preventDefault();
        nineEl.text = tasks.nineForm

    });
}

var scheduleForm = function() {

    // create elements for time
    // elements for time styling
    // go through function that creates one timeblock for each hour of business
};

var saveTask = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

var loadTask = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));
    if (!tasks) {
        tasks = {
            nineForm: [],
            tenForm: [],
            elevenForm: [],
            twelveForm: [],
            oneForm: [],
            twoForm: [],
            threeForm: [],
            fourForm: [],
            fiveForm: [],
        }
    }
}

console.log(tasks)
addTask();
scheduleForm();
saveTask();
loadTask();
console.log(tasks.nineForm);