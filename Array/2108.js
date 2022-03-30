//2108. Find First Palindromic String in the Array
/**
 * @param {string[]} words
 * @return {string}
 */
 function isPalin(str) {
    for (let i = 0; i <= str.length / 2; i++) {
        if (str[i]!==str[str.length-i-1]) {
            return false;
        }
    }
    return true;
}

var firstPalindrome = function(words) {
    for (let i = 0; i < words.length; i++) {
        if (isPalin(words[i])) {
            return words[i];
        }
    }
    return "";
};