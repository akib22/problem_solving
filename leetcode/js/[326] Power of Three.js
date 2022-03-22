/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if(n === 1) return true;
    
    let power = 3; 
    
    while(power <= n) {
        if(n === power) {
            return true;
        }
        power *= 3;
    }
    
    return false;
};
