//599. Minimum Index Sum of Two Lists
/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
//1. HashMap not refactored
var findRestaurant = function(list1, list2) {
    let least = Infinity;
    let hashMap = {};
    for (let i = 0; i < list1.length; i++) {
        if (hashMap.hasOwnProperty(list1[i])) {
            hashMap[list1[i]][0] = i;
        } else {
            hashMap[list1[i]] = [null, null];
            hashMap[list1[i]][0] = i;
        }
    }
    for (let i = 0; i < list2.length; i++) {
        if (hashMap.hasOwnProperty(list2[i])) {
            hashMap[list2[i]][1] = i;
            if (hashMap[list2[i]][0] + hashMap[list2[i]][1] < least) {
                least = hashMap[list2[i]][0] + hashMap[list2[i]][1];
            }
        } else {
            hashMap[list2[i]] = [null, null];
            hashMap[list2[i]][1] = i;
        }
        }
    let output = [];
    for (const prop in hashMap) {
        if (hashMap[prop][0] !== null && hashMap[prop][1] !== null) {
            if (hashMap[prop][0] + hashMap[prop][1] == least) {
                output.push(prop);
            }
        }
    }
    return output;
};