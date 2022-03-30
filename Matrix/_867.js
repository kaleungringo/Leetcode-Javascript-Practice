//867. Transpose Matrix
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
 var transpose = function(matrix) {
    let trans = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (!trans[j]) {
                trans[j] = [];
                trans[j].push(matrix[i][j]);
            } else {
                trans[j].push(matrix[i][j]);   
            }
        }
    }
    return trans;
};