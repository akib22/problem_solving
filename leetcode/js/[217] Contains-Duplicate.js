/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let obj = {}
    
    for(let i = 0; i < nums.length; i++) {
        const num = nums[i]
        
        if (obj[num]) {
            return true
        }
        
        obj[num] = true
    }
    
    return false
};
