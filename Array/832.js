//832. Flipping an Image
/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    let temp = [];
    for (let i = 0; i < image.length; i++) {
        temp = [];
        for (let j = image[i].length - 1; j >= 0 ; j--) {
            if (image[i][j] === 0) {
                temp.push(1);
            } else {
                temp.push(0);
            }
        }
        image[i] = temp;
    }
    return image;
};