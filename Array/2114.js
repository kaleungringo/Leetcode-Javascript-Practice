//2114. Maximum Number of Words Found in Sentences
/**
 * @param {string[]} sentences
 * @return {number}
 */
//1. Looping with RegEx
// var mostWordsFound = function(sentences) {
//     let max = 0;
//     let word = 0;
//     for (const sentence of sentences) {
//         word = ((sentence.match(/\s/g) || []).length + 1);
//         if (word > max) {
//             max = word;
//         }
//     }
//     return max;
// };

//2. For loop with toString
var mostWordsFound = function(sentences) {
    let max = 0;
    let word = 1;
    let all = sentences.join(";") + ";"
    for (let n=0; n<all.length; n++) {
        if (all[n] === " ") {
            word++;
        } else if (all[n] === ";") {
            if (word > max) {
                max = word;
            }
            word = 1;
        }
    }
    return max;
};