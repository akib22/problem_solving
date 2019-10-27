/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 
var merge = function(nums1, m, nums2, n) {
    let length = nums1.length;
    let i = 0, j = 0;
    
    while( i < m) {
        if(j === n) break;
        if (nums1[i]  < nums2[j]) {
            i++;
        } else {
            let splicePart = nums1.splice(i);
            nums1.push(nums2[j], ...splicePart);
            j++;
            i++;
        }
    }
    
    if(j < n) {
       let extraPart = nums1.splice(m+j);
       let spliceNum = i === m ? nums1.length - 1 : i;
        while(j < n) {
            // if(i > m) break;
            if (nums1[spliceNum]  < nums2[j]) {
                nums1.push(nums2[j]);
                j++;
            } else {
                let splicePart = nums1.splice(spliceNum);
                nums1.push(nums2[j], ...splicePart);
                spliceNum++;
                j++;
            }
        }
        while(nums1.length < length) {
            nums1.push(extraPart.pop());
        }
    }
    
    while(nums1.length > length) {
        nums1.pop();
    }

};
