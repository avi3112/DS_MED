// Example 1:

// Input: nums = [1,3,4,2,2]

// Output: 2


const dup= function(nums){
    let list=[]
    for(let i=0;i<nums.length;i++){
        if(list[nums[i]]==undefined){
            list[nums[i]]=nums[i]
        }else{
            return nums[i]
        }
    }
}

const test= dup([1,3,4,2,2])
console.log(test)
