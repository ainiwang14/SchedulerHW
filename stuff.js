const timeBlocksCount = 13
$("#currentDay").append(moment().format('DD-MM-YYYY'))


function makeTimeBlocks() {

    for (let i = 0; i < timeBlocksCount; i++) {
        const timeBlockContainer = $("<div>");

        timeBlockContainer.attr("id", i);

        timeBlockContainer
            .append(makeTimeBlockHour(i))
            .append(makeTimeBlockActivity())
            .append(makeTimeBlockSave());
        $(".container").append(timeBlockContainer);
    }
}

function makeTimeBlockHour(counter) {
    const timeBlockHour = $("<div>");
    const hour = moment().startOf('day').add(counter + 8, 'h').format('h A');
    timeBlockHour.text(hour);
    timeBlockHour.attr("class", "inline hour");
    return timeBlockHour
}

function compareTime(id) {
    const currentHour = moment().format('H');
    return id + 8 - currentHour;

}

function makeTimeBlockActivity() {
    const timeBlockActivity = $("<input>");
    timeBlockActivity.text("activity");
    timeBlockActivity.attr("class", "inline activity");

    if (compareTime() < 0) {
        timeBlockActivity.addClass("past")
    }

    else if (compareTime() == 0) {
        timeBlockActivity.addClass("present")
    }

    else {
        timeBlockActivity.addClass("future")
    };

    return timeBlockActivity;
}

function makeTimeBlockSave() {
    const timeBlockSave = $("<button>");
    timeBlockSave.text("save");
    timeBlockSave.attr("class", "inline saveBtn");

    function onClick(counter) {
        const savedActivityText = $("input.activity").val();
        console.log(savedActivityText);
        localStorage.setItem(counter, savedActivityText);
    }

    timeBlockSave.click(onClick);
    return timeBlockSave;
}

makeTimeBlocks()
