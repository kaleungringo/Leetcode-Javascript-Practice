//389. Find the Difference
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
//1. HashMap
var findTheDifference = function(s, t) {
    let hashMap = {};
    for (let i = 0; i < t.length; i++) {
        if (hashMap.hasOwnProperty([s[i]])) {
            hashMap[s[i]][0]++;
        } else {
            if (i < s.length) {
            hashMap[s[i]] = [0, 0];
            hashMap[s[i]][0]++;
            }
        }
        if (hashMap.hasOwnProperty([t[i]])) {
            hashMap[t[i]][1]++;
        } else {
            hashMap[t[i]] = [0, 0];
            hashMap[t[i]][1]++;
        }
    }
    for (const prop in hashMap) {
        if (hashMap[prop][0] !== hashMap[prop][1]) {
            return prop;
        }
    }
};