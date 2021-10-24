//global variables
var currentDayEl = $("#currentDay");
var currentDate = moment().format("MMMM do YYYY, h:mm:ss a");
var timeEl = $(".time-block");
var currentHr = moment().format("H")
var submitBtnEl = $(".saveBtn")
//display the schedule and save the tasks to local storage
function displaySchedule() {
    timeEl.each(function() {
        var currBlockTime = parseInt($(this).attr("data-id"));

        $(this).children(".description").val(localStorage.getItem(currBlockTime));

        if(currentHr == currBlockTime) {$(this).children("textarea").addClass("present");}

        if(currentHr > currBlockTime) {$(this).children("textarea").addClass("past");}

        if(currentHr < currBlockTime) {$(this).children("textarea").addClass("future");}
    });

    submitBtnEl.on("click", changeSchedule);
}

function changeSchedule (event) {
    var checkHr = $(this).parent().attr("data-id");
    var editTasks = $(this).siblings(".description").val();
    localStorage.setItem(checkHr, editTasks);
}
//load schedule and display date
$(document).ready( () => {
    displaySchedule();
    currentDayEl.innerHTML = currentDate;
    currentDayEl.append(currentDate);
});