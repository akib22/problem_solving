/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    if(num === 1) return true;
    
    let power = 4; 
    
    while(power <= num) {
        if(num === power) {
            return true;
        }
        power *= 4;
    }
    
    return false;
};
