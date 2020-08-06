const timeBlocksCount = 13

function makeTimeBlocks() {

    for (let i = 0; i < timeBlocksCount; i++) {
        const timeBlockContainer = $("<div>");

        timeBlockContainer.attr("id", i);

        timeBlockContainer
            .append(makeTimeBlockHour())
            .append(makeTimeBlockActivity())
            .append(makeTimeBlockSave());
        $(".container").append(timeBlockContainer);

    }

}

function makeTimeBlockHour() {
    const timeBlockHour = $("<div>");
    const hour = moment().startOf('day').add(i + 8, 'h').format('h A');
    timeBlockHour.text(hour);
    timeBlockHour.attr("class", "inline");
    return timeBlockHour
}

function makeTimeBlockActivity() {
    const timeBlockActivity = $("<div>");
    timeBlockActivity.text("activity");
    timeBlockActivity.attr("class", "inline");
    return timeBlockActivity;
}

function makeTimeBlockSave() {
    const timeBlockSave = $("<button>");
    timeBlockSave.text("save");
    timeBlockSave.attr("class", "inline");
    return timeBlockSave;
}

makeTimeBlocks()
