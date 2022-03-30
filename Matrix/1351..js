//1351. Count Negative Numbers in a Sorted Matrix
/**
 * @param {number[][]} grid
 * @return {number}
 */
 var countNegatives = function(grid) {
    let j = 0;
    let counter = 0;
    for (let i = 0; i < grid.length; i++) {
        j = grid[i].length - 1;
        while (grid[grid.length - i - 1][j] < 0) {
            counter++;
            j--;
        }
    }
    return counter;
};