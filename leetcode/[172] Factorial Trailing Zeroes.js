/**
 * @param {number} n
 * @return {number}
 */

/* Approach
-> First calculate the factorial
-> Then count zeros from factorial by dividing 10
*/

var trailingZeroes = function(n) {
    let factorial = 1n,
        count = 0
   
    for(let i = 2n; i <= n; i += 1n) {
        factorial *= i
    }
   
    while(factorial % 10n === 0n) {
        count += 1
        factorial /= 10n
    }
   
    return count
};
