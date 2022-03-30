//566. Reshape the Matrix
/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
 var matrixReshape = function(mat, r, c) {
    let output = [];
    let n = 0;
    //input r c check
    if (r * c == mat.length * mat[0].length) {
    for (let i = 0; i < r; i++) {
        output.push([]);
    }
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            output[n].push(mat[i][j]);
            if (output[n].length == c) {
                n++;
            }
        }
    }
    return output;
    } else {
        return mat;
    }
};