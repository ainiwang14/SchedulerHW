const timeBlocksCount = 13

function makeTimeBlocks() {

    for (let i = 0; i < timeBlocksCount; i++) {
        const timeBlockContainer = $("<div>");

        timeBlockContainer.attr("id", i);

        timeBlockContainer
            .append(makeTimeBlockHour(i))
            .append(makeTimeBlockActivity())
            .append(makeTimeBlockSave(i));
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

function makeTimeBlockActivity() {
    const timeBlockActivity = $("<input>");
    timeBlockActivity.text("activity");
    timeBlockActivity.attr("class", "inline activity");
    return timeBlockActivity;
}

function makeTimeBlockSave(counter) {
    const timeBlockSave = $("<button>");
    timeBlockSave.text("save");
    timeBlockSave.attr("class", "inline save");

    function onClick(counter) {
        const savedActivityText = $("input.activity").val();
        console.log(savedActivityText);
        localStorage.setItem(counter, savedActivityText);
    }

    timeBlockSave.click(onClick);
    return timeBlockSave;
}

makeTimeBlocks()
