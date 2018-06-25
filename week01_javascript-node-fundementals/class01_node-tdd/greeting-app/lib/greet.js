
module.exports = function greet(name = 'stranger', options = {}) {
    const salutation = options.salutation || 'hello';
    let greeting = `${salutation} ${name}`;
    if(options.shout) greeting = greeting.toUpperCase();
    return greeting;
};