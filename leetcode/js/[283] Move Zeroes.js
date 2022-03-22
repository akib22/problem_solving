/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let length = nums.length;

  for (let i = 0; i < length; ) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
      length--;
    } else {
      i++;
    }
  }
};

// more faster solution with same idea

var moveZeroes = function(nums) {
  let length = nums.length;
  let zeroCount = 0;

  for (let i = 0; i < length - zeroCount; ) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      zeroCount++;
    } else {
     i++;   
    }
  }

  if (zeroCount) nums.push(...Array(zeroCount).fill(0));
  
};

