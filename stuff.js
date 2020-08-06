const timeBlocksCount = 13

function makeTimeBlocks() {

    for (let i = 0; i < timeBlocksCount; i++) {
        const hour = moment().startOf('day').add(i + 8, 'H').format('H');
        const timeBlock = $("<div>");
        timeBlock.text(hour);
        $(".container").append(timeBlock);
    }

}

makeTimeBlocks()
