// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]

var searchRange = function(nums, target) {
    let li=[]
    for(let i=0;i<nums.length;i++){
        if(nums[i]==target){
            li.push(i)
        }

    } return li

    
};

const result= searchRange([5,7,7,8,8,10],8)
console.log(result)
