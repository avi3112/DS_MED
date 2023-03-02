// Input: head = [4,2,1,3]
// Output: [1,2,3,4]

// Input: head = [-1,5,3,4,0]
// Output: [-1,0,3,4,5]

// head = [-1,5,3,4,0]
// const result= head.sort()
// console.log(result)


const Sort = function(array){

    for(let i=array.length;i>0;i--){
        for(let j=0;j<i-1;j++){
            if(array[j]>array[j+1]){
                [array[j],array[j+1]]=[array[j+1],array[j]]

            }            
        }

    }return array

}
const result= Sort([4,2,1,3])
console.log(result)