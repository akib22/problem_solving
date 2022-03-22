/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 
// buble sort implementation
var sortColors = function(nums) {

    const swap = (arr, indx1, indx2) => {
        [arr[indx1], arr[indx2]] = [arr[indx2], arr[indx1]]; // es6 syntax
    }
    
    for(let i = 0; i < nums.length; i++) {
        for(let j = i+1; j < nums.length; j++) {
            if(nums[j] <  nums[i]) swap(nums, i, j);
        }
    }
};

// try to solve by selection implementation
var sortColors = function(nums) {
     for(let i = 1; i < nums.length; i++) {
        let currentElem = nums[i],
            currentIndx = i,
            isSmall = false;
        for(let j = i-1; j >= 0; j--) {
            if(currentElem < nums[j]) {
                nums[currentIndx] = nums[j];
                currentIndx--;
                isSmall = true;
            } else break;
        }
        if(isSmall) nums[currentIndx] = currentElem;
    }
};
