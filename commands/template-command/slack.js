module.exports = async (message) => {

    // Write your code here using the message.

    let someText = "Hello World"

    return message.channel.send(someText).catch(console.error);

}