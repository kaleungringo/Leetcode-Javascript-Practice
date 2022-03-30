//1460. Make Two Arrays Equal by Reversing Sub-arrays
/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
//1. HashMap
var canBeEqual = function(target, arr) {
    let hashMap = {};
    for (let i = 0; i < target.length; i++) {
        if (hashMap.hasOwnProperty(target[i])) {
            hashMap[target[i]][0]++;
        } else {
            hashMap[target[i]] = [0, 0];
            hashMap[target[i]][0]++;
        }
        if (hashMap.hasOwnProperty(arr[i])) {
            hashMap[arr[i]][1]++;
        } else {
            hashMap[arr[i]] = [0, 0];
            hashMap[arr[i]][1]++;
        }
    }
    for (const prop in hashMap) {
        if (hashMap[prop][0] !== hashMap[prop][1]) {
            return false;
        }
    }
    return true;
};

//2. Sorting