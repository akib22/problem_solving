/**
 * @param {number[]} nums
 * @return {number}
 */
 
/*
-> store count in an object
-> then filter the value with counter 1
-> return that key
*/
var singleNumber = function(nums) {
    const counter = {}
    
    for(let i = 0; i < nums.length; i += 1) {
      if (counter[nums[i]]) {
        counter[nums[i]] += 1
      } else {
        counter[nums[i]] = 1
      }
    }
  
    return Object.keys(counter).filter(key => counter[key] === 1)
};
