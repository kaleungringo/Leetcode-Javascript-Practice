//1572. Matrix Diagonal Sum
/**
 * @param {number[][]} mat
 * @return {number}
 */
// O(n)
var diagonalSum = function(mat) {
    let output = 0 ;
    let s = mat.length;
    for (let i = 0; i < s; i++) {
        output += mat[i][i] + mat[i][s - i - 1];
        if (i == s - i -1) {
            output -= mat[i][i];
        }
    }
    return output;
};