//1732. Find the Highest Altitude
/**
 * @param {number[]} gain
 * @return {number}
 */
 var largestAltitude = function(gain) {
    let alt = 0;
    let temp = 0;
    for (let i = 0; i < gain.length; i++) {
        temp += gain[i];
        if (temp > alt) {
            alt = temp;
        }
    }
    return alt;
};