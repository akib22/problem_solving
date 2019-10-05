/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if( Math.floor(num / 10) <= 0 ) return num;
    
    let sum = 0;

    while(num > 0) {
        let mod = num % 10;
        sum += mod;
        num = Math.floor(num / 10);
    }

    return addDigits(sum);
};
