//383. Ransom Note
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
//1. HashMap
var canConstruct = function(ransomNote, magazine) {
    let length = (ransomNote.length > magazine.length ? ransomNote.length : magazine.length);
    let hashMap = {};
    for (let i = 0; i < length; i++) {
        if (hashMap.hasOwnProperty(ransomNote[i])) {
            hashMap[ransomNote[i]][0]++;
        } else {
            hashMap[ransomNote[i]] = [0, 0];
            hashMap[ransomNote[i]][0]++;
        }
        if (hashMap.hasOwnProperty(magazine[i])) {
            hashMap[magazine[i]][1]++;
        } else {
            hashMap[magazine[i]] = [0, 0];
            hashMap[magazine[i]][1]++;
        }
    }
    for (let i = 0; i < ransomNote.length; i++) {
        if (hashMap[ransomNote[i]][0] > hashMap[ransomNote[i]][1]) {
            return false;
        }
    }
    return true;
};

//2. RegEx