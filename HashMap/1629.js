//1629. Slowest Key
/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
//1. hashMap
var slowestKey = function(releaseTimes, keysPressed) {
    let hashMap = {};
    let max = 0;
    let output = "";
    for (let i = 0; i < keysPressed.length; i++) {
        if (hashMap.hasOwnProperty(keysPressed[i])) {
            hashMap[keysPressed[i]] += releaseTimes[i] - releaseTimes[i - 1];
        } else {
            if (i == 0) {
                hashMap[keysPressed[i]] = releaseTimes[i];
            } else {
                hashMap[keysPressed[i]] = 0;
                hashMap[keysPressed[i]] += releaseTimes[i] - releaseTimes[i - 1];   
            }
        }
        if (hashMap[keysPressed[i]] > max) {
            max = hashMap[keysPressed[i]];
            output = keysPressed[i];
        }
    }
    return output;
};

//2. Access from the tail