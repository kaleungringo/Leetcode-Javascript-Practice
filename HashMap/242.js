//242. Valid Anagram
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    } else {
        let hashMap = {};
        for (let i = 0; i < s.length; i++) {
            if (hashMap.hasOwnProperty(s[i])) {
                hashMap[s[i]][0]++;
            } else {
                hashMap[s[i]] = [0, 0]
                hashMap[s[i]][0]++;
            }
            if (hashMap.hasOwnProperty(t[i])) {
                hashMap[t[i]][1]++;
            } else {
                hashMap[t[i]] = [0, 0]
                hashMap[t[i]][1]++;
            }
        }
        for (const char in hashMap) {
            if (hashMap[char][0] !== hashMap[char][1]) {
                return false
            }
        }
        return true;
    }
};