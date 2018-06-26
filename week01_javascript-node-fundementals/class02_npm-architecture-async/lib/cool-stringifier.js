
module.exports = class CoolStringifier {
    constructor(sentence) {
        this.sentence = sentence;
    }

    reverseWordOrder() {
        this.sentence = this.sentence.split(' ').reverse().join(' ');
        return this;
    }

    reverseWordLetters() {
        this.sentence = this.sentence
            .split(' ')
            .map(word => word.split('').reverse().join(''))
            .join(' ');
        return this;
    }

    shout() {
        this.sentence = this.sentence.toUpperCase();
        return this;
    }
};