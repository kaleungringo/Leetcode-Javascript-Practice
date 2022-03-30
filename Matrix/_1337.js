//1337. The K Weakest Rows in a Matrix
/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
//1. Brute force using hashMap
var kWeakestRows = function(mat, k) {
    let hashMap = {};
    let temp = 0;
    for (let i = 0; i < mat.length; i++) {
        temp = 0;
        for (let j = 0; j < mat[i].length; j++) {
            if (mat[i][j] == 1) {
                temp++;
            }
        }
        if (hashMap.hasOwnProperty(temp)) {
            hashMap[temp].push(i);
        } else {
            hashMap[temp] = [i];
        }
    }
    let output = [];
    temp = 0;
    while (output.length < k) {
        if (hashMap.hasOwnProperty(temp)) {
            output.push(...hashMap[temp])
        }
        temp++
    }
    while (output.length !== k) {
        output.pop();
    }
    return output;
};