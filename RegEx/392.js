//392. Is Subsequence
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
//1. Sequential search
// var isSubsequence = function(s, t) {
//     let j = 0;
//     for (let i = 0; i < t.length; i++) {
//         if (t[i] == s[j]) {
//             j++;
//         }
//     }
//     return (s.length == j);
// };

//2. RegEx
var isSubsequence = function(s, t) {
    let j = 0;
    for (let i = 0; i < t.length; i++) {
        if (t[i] == s[j]) {
            j++;
        }
    }
    return (s.length == j);
};