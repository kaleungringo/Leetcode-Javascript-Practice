//387. First Unique Character in a String
/**
 * @param {string} s
 * @return {number}
 */
//1. Hash Map
var firstUniqChar = function(s) {
    let hashMap = {};
    for (let i = 0; i < s.length; i++) {
        if (hashMap.hasOwnProperty(s[i])) {
            hashMap[s[i]][0]++;
        } else {
            hashMap[s[i]] = [1, i] ;
        }
    }
    for (const prop in hashMap) {
        if (hashMap[prop][0] == 1) {
            return hashMap[prop][1];
        }
    }
    return -1;
};