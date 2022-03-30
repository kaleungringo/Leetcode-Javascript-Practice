//1672. Richest Customer Wealth
/**
 * @param {number[][]} accounts
 * @return {number}
 */
 var maximumWealth = function(accounts) {
    let richest = 0;
    for (let n=0, sum=0; n < accounts.length; n++) {
        sum = 0;
        for (let j=0; j<accounts[n].length; j++) {
            sum += accounts[n][j];
        }
        if (sum > richest) {
            richest = sum;
        }
    }
    return richest;
};