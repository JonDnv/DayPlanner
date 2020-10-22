var timeOfDay = parseInt(moment().format("HH"));

var eight = $("#8AM");
var nine = $("#9AM");
var ten = $("#10AM");
var eleven = $("#11AM");
var twelve = $("#12PM");
var thirteen = $("#13PM");
var fourteen = $("#14PM");
var fifteen = $("#15PM");
var sixteen = $("#16PM");
var seventeen = $("#17PM");
var eighteen = $("#18PM");

function updateCalendar() {
    eight.append(localStorage.getItem("8AM"));
    nine.append(localStorage.getItem("9AM"));
    ten.append(localStorage.getItem("10AM"));
    eleven.append(localStorage.getItem("11AM"));
    twelve.append(localStorage.getItem("12PM"));
    thirteen.append(localStorage.getItem("13PM"));
    fourteen.append(localStorage.getItem("14PM"));
    fifteen.append(localStorage.getItem("15PM"));
    sixteen.append(localStorage.getItem("16PM"));
    seventeen.append(localStorage.getItem("17PM"));
    eighteen.append(localStorage.getItem("18PM"));
}

function timeColor() {
    $("textarea").each(function () {
        var hour = parseInt($(this).attr("name"));
        if (hour === timeOfDay) {
            $(this).addClass("present");
        } else if (hour < timeOfDay) {
            $(this).addClass("past");
        } else {
            $(this).addClass("future");
        }
    });
}

$(document).ready(function () {
    $("#currentDay").text(moment().format("MMMM DD, YYYY"));
    setInterval(timeColor(), 60000);
    updateCalendar();
});

$("#btn8").click(function () {
    localStorage.setItem("8AM", eight.val());
});

$("#btn9").click(function () {
    localStorage.setItem("9AM", nine.val());
});

$("#btn10").click(function () {
    localStorage.setItem("10AM", ten.val());
});

$("#btn11").click(function () {
    localStorage.setItem("11AM", eleven.val());
});

$("#btn12").click(function () {
    localStorage.setItem("12PM", twelve.val());
});

$("#btn13").click(function () {
    localStorage.setItem("13PM", thirteen.val());
});

$("#btn14").click(function () {
    localStorage.setItem("14PM", fourteen.val());
});

$("#btn15").click(function () {
    localStorage.setItem("15PM", fifteen.val());
});

$("#btn16").click(function () {
    localStorage.setItem("16PM", sixteen.val());
});

$("#btn17").click(function () {
    localStorage.setItem("17PM", seventeen.val());
});

$("#btn18").click(function () {
    localStorage.setItem("18PM", eighteen.val());
});