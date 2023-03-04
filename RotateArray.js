// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]



const rotate = function(nums,k) {
    k = k % nums.length // if k is greater than nums.length then one cycle is completed that means it will remain the same and we have to remainder shifts
    console.log(k)
    let reverse = function(start,end){
        while(start < end){
         let temp = nums[start]  // temp will get 1 value
         nums[start] = nums[end]   // start will get 7 here
         nums[end] = temp          // end will get 1 gere
         start++
         end--
     }

    } // suppose  ----->---> 
    reverse(0, nums.length-1); // reverse   <--<------
    reverse(0, k-1); // reverse first part ---><----
    reverse(k, nums.length-1);// reverse second part --->----->
    return nums
    
     
 };

const result= rotate([1,2,3,4,5,6,7],3)
console.log(result)

// let see this is the array [1,2,3,4,5,6,7]

// first we will reverse all the array [7,6,5,4,3,2,1]

// second we will reverse the k part [5,6,7,4,3,2,1]

//thirt we will reverse second part [5,6,7,1,2,3,4]


