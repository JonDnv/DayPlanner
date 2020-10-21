var timeOfDay = parseInt(moment().format("HH"));

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

setInterval(timeColor(), 60000);

$(document).ready(function () {
    $("#currentDay").text(moment().format("MMMM DD, YYYY"));
    timeColor();
});
