/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  s = s.trim().replace(/[ ]{2,}/g, ' ')
  
  return s.split(' ').reverse().join(' ')
};
