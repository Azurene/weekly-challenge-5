var tasks = {};
var currentDate = moment();
var currentDayEl = $("#currentDay");
var nineEl = $("#9AM")

// display current day and time
currentDayEl.text(currentDate);

$("#submit-9").on("click", function(event) {
    event.preventDefault();

    tasks.nineForm = nineEl.value;

    localStorage.setItem("tasks");
});

var loadList = function () {
    tasks = JSON.parse(localStorage.getItem("tasks"));

    // if nothing is in localStorage, create a new object to track all task status arrays
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
            fiveForm: []
        };
    }

    // loop over object properties
    $.each(tasks, function(list, arr) {
        // then loop over sub-array
        arr.forEach(function(task) {
            createList(task.text, task.time, list);
        });
    });
};

var saveList = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

var auditTextarea = function(textareaEl) {
    var currentTime = $(textareaEl).find("textarea").text().trim();

    var taskTime = moment(date, "L").set("hour", 17);
}

loadList();