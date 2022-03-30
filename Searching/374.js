//374. Guess Number Higher or Lower
/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
//1. Binary search
var guessNumber = function(n) {
    let found = false;
    let [lower, upper] = [1, n];
    let num = 0;
    while (!found) {
        num = Math.round((lower + upper) / 2);
        if (guess(num) == -1) {
            upper = num - 1;
        }
        if (guess(num) == 1) {
            lower = num + 1
        }
        if (guess(num) == 0) {
            found = true;
        }
    }
    return num;
};

//2. Sequential search (Too slow)
// var guessNumber = function(n) {
//     let i = 0;
//     while (guess(i)!==0) {
//         i++;
//     }
//     return i;
// };