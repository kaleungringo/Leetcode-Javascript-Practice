//557. Reverse Words in a String III
/**
 * @param {string} s
 * @return {string}
 */
//1. Split -> Reverse -> Join
var reverseWords = function(s) {
    let newS = s.split(' ');
    for (let i = 0; i < newS.length; i++) {
        newS[i] = newS[i].split('').reverse().join('');
    }
    return newS.join(' ');
};