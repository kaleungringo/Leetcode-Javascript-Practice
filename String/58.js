//58. Length of Last Word
/**
 * @param {string} s
 * @return {number}
 */
//1. 
// var lengthOfLastWord = function(s) {
//     let max = 0;
//     let count = 0;
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] !== " ") {
//             count++;
//         } else {
//             count = 0;
//         }
//         if (count > max) {
//             max = count;
//         }
//     }
//     return max;
// };

//O(n)
var lengthOfLastWord = function(s) {
    let count = 0;
    let i = s.length - 1;
    while (i >= 0) {
        if (s[i] !== " ") {
            count++;
        } else {
            if (count !== 0) {
                return count; //return if first word is finished
            }
        }
        i--;
    }
    return count; //handle case with no space
};