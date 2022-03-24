/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let left = 0,
        right = nums.length - 1;
        
        while (left <= right) {
            let l_sq = nums[left]**2
            let r_sq = nums[right]**2
            
            if (l_sq > r_sq) {
                nums.splice(right + 1, 0, l_sq)
                nums.splice(left, 1)
            } else {
                nums[right] = r_sq
            }
            
            right -= 1
        }
                
        return nums
};
