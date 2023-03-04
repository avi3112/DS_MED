// Input: head = [4,5,1,9], node = 5
// Output: [4,1,9]
// Explanation: You are given the second node with value 5, the linked list should become 4 ->
// 1 -> 9 after calling your function.

const test = function(array,index){
    for(let i=0;i<array.length;i++){
        if([i]===index){
            delete(array[i])
        }
    }return array
}

const result= test([4,5,1,9],0)
console.log(result)