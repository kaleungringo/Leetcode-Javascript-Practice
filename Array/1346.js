//1346. Check If N and Its Double Exist ****
/**
 * @param {number[]} arr
 * @return {boolean}
 */
//1. HashMap
var checkIfExist = function(arr) {
    let hashMap = {};
    for (let n = 0; n < arr.length; n++) {
        if (!hashMap.hasOwnProperty(arr[n])) {
            hashMap[arr[n]] = n;
        }
        if (arr[n] == 0 && hashMap[0] !== n) {
            return true;
        }
        if ((hashMap.hasOwnProperty(arr[n]*2) || hashMap.hasOwnProperty(arr[n]/2)) && arr[n] !== 0) {
            return true;
        }
    }
    return false;
};