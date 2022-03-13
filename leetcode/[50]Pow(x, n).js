var myPow = function(x, n) {
  return x ** n  
};

/* GOT TIME LIMIT EXCEED */
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if (n === 0) return 1

  const isNegative = n < 1
  let pow = 1
  
  while(n) {
    pow *= x

    if (isNegative) {
      n++
    } else {
      n--
    }
  } 
  
  return !isNegative ? pow : (1 / pow)
}
