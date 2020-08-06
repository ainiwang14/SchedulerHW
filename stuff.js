const timeBlocksCount = 13

function makeTimeBlocks() {

    for (let i = 0; i < timeBlocksCount; i++) {
        const hour = moment().startOf('day').add(i + 8, 'h').format('h A');
        const timeBlockContainer = $("<div>");
        const timeBlockHour = $("<div>");
        const timeBlockActivity = $("<div>");
        const timeBlockSave = $("<div>");

        timeBlockHour.text(hour);
        timeBlockActivity.text("activity");
        timeBlockSave.text("save");
        timeBlockContainer.append(timeBlockHour).append(timeBlockActivity).append(timeBlockSave);
        $(".container").append(timeBlockContainer);

    }

}

makeTimeBlocks()
