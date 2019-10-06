/**
 * @param {number[]} nums
 * @return {number}
 */
 
 /** PSEUDO CODE 
  * sort the arr
  * run a loop and find the missing num 
  * if found return missing one
  */
  
var missingNumber = function(nums) {
    nums.sort((a, b)=> a - b);
    
    for(let i = 0, value = 0; i <= nums.length; i++, value++) {
        if(value !== nums[i]) return value;
    }
};
