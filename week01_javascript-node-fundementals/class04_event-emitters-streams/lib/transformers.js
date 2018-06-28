module.exports = {
    reverseWords(words) {
        const reversedWords = words.split(' ').map(word => {
            return word.split('').reverse().join('');
        });
        return reversedWords.join(' ');
    },

    shout(words) {
        return words.toUpperCase();
    }
};