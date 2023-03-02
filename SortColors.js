// Example 1:
// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]


// Example 2:
// Input: nums = [2,0,1]
// Output: [0,1,2]


const Sort = function(array){

    for(let i=array.length;i>0;i--){
        for(let j=0;j<i-1;j++){
            if(array[j]>array[j+1]){
                [array[j],array[j+1]]=[array[j+1],array[j]]

            }            
        }

    }return array

}
const result= Sort([2,0,2,1,1,0])
console.log(result)