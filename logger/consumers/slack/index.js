const {CONSUMER_TYPES} = require("../base");
const {BaseConsumer} = require("../base");

class SlackConsumer extends BaseConsumer {

    constructor(commandList) {
        super(commandList, CONSUMER_TYPES.SLACK);
    }

}

module.exports = SlackConsumer;