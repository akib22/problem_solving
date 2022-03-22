// wrong answer 

/**
 * @param {number} n
 * @return {number}
 */
 
var countPrimes = function(n) {
    let numberOfPrimes = 0;
    
    function isPrime(num) {
        if(num === 2) return true;
        
        if(num % 2 === 0) return false;
        
        for(let j = 3; j <= num / 2; j += 2) {
            if(num % j === 0) {
                return false;
            }
        }
        return true;
    }
    
    for(let i = 2; i < n; i++) {
        if(isPrime(i)) {
            numberOfPrimes++;
        }
    }
    
    return numberOfPrimes;
};


// correct answer 

/**
 * @param {number} n
 * @return {number}
 */
 
var countPrimes = function(n) {
    let numberOfPrimes = 0;
    
    function isPrime(num) {
        if(num === 2) return true;
        
        if(num % 2 === 0) return false;
        
        for(let j = 3; j <= Math.sqrt(num); j += 2) {
            if(num % j === 0) {
                return false;
            }
        }
        
        return true;
    }
    
    for(let i = 2; i < n; i++) {
        if(isPrime(i)) {
            numberOfPrimes++;
        }
    }
    
    return numberOfPrimes;
};
