/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    for(let i = 0; i < nums.length; i++) {
        let lowest = i;
        for(let j = i+1; j < nums.length; j++) {
            if(nums[lowest] > nums[j]) {
                lowest = j;
            }
        }
        if(lowest !== i) {
            [nums[i], nums[lowest]] = [nums[lowest], nums[i]];
        }
    }
    return nums;
};

// merge sort algorithm implementation   

const mergeArr = function (arr1, arr2) {
    let i = 0, j = 0, mergedArr = [];
    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]){
            mergedArr.push(arr1[i]);
            i++;
        } else {
           mergedArr.push(arr2[j]);
           j++; 
        }
    }

    while(i < arr1.length) {
        mergedArr.push(arr1[i]);
        i++;
    }

    while(j < arr2.length) {
        mergedArr.push(arr2[j]);
        j++;
    }

     return mergedArr;
}

const sortArray = function(nums) {
    if(nums.length === 1) return nums;
    const mid = Math.ceil(nums.length / 2);
    const leftSide = sortArray(nums.slice(0, mid));
    const rightSide = sortArray(nums.slice(mid));
    return  mergeArr(leftSide, rightSide);
};


// insertion sort 

const sortArray = function(nums) {
	let currentValue;
    for(let i = 1; i < nums.length; i++){
        currentValue = nums[i];
        for(var j = i - 1; j >= 0 && nums[j] > currentValue; j--) {
            nums[j+1] = nums[j]
        }
        nums[j+1] = currentValue;
    }
    return nums;
};

