/*Approach
  - decalare an object for storing indexes
  - push indexes in that object with index value as key
  - check (lastStoredIndex - currentIndex) <= k
  - if true then return 
  - else at the end of the loop return false
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
   const obj = {}
   
   for(let index = 0; index < nums.length; index += 1) {
     const num = nums[index]

     if(obj[num]) {
       const lastMatchedIndex = obj[num][obj[num].length - 1]
       
       if (Math.abs(lastMatchedIndex - index) <= k) {
         return true
       } else {
         obj[num].push(index)
       }
     } else {
       obj[num] = [index]
     }
   }
  
   return false
};
