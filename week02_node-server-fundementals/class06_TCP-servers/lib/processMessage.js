module.exports = function processMessage(message) {
    if(!message || message[0] !== '!') return message;
    return message.slice(1).toUpperCase();
};