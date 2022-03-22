/**
 * @param {number[]} nums
 * @return {number}
 */
 
var dominantIndex = function(nums) {
  let sortedNums = [...nums];
  sortedNums.sort((a, b) => a - b);
  let maxNum = sortedNums[sortedNums.length - 1];
  
  for(let i = 0; i < sortedNums.length - 1; i++) {
      if(sortedNums[i] * 2 > maxNum) {
          return -1;
      }
  }
  
  return nums.indexOf(maxNum);
};
