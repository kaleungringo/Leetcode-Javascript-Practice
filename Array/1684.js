//1684. Count the Number of Consistent Strings
/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
//1. Brute force
var countConsistentStrings = function(allowed, words) {
    let hashMap = {
    }
    for (const cha in allowed) {
        hashMap[allowed[cha]] = 1 ;
    }
    let count = words.length;
    for (let n = 0; n < words.length; n++) {
        for (let j = 0; j < words[n].length; j++) {
            if (!hashMap.hasOwnProperty(words[n][j])) {
                count--;
                break;
                }
        }
    }
    return count;
};

//2. Regex