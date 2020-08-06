const timeBlocksCount = 12

function makeTimeBlocks() {

    for (let i = 0; i < timeBlocksCount; i++) {
        const timeBlock = $("<div>");
        timeBlock.text("hello world")
        $(".container").append(timeBlock);
    }

}

makeTimeBlocks()
