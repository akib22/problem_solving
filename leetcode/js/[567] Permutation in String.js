// This technique resulted in a TIME LIMIT EXCEED error.

function sortString(s) {
    return s.split('').sort().join('')
}

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) return false
    
    const sortedS1 = sortString(s1)
    
    for(let index = 0; index <= s2.length - sortedS1.length; index += 1) {
        const subString = s2.substring(index, index + sortedS1.length)
        const sortedSubString = sortString(subString)
        
        if (sortedS1 === sortedSubString) {
            return true
        }
    }
    
    return false
};
