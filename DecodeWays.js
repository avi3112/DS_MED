// A message containing letters from A-Z can be encoded into numbers using the following mapping:

// 'A' -> "1"
// 'B' -> "2"
// ...
// 'Z' -> "26"

// logic is if IV >> we will 5-1 and in this VI 5+1

// const romanToInt= function(s){
//     const myMap={
//         'I':1,
//         'V':5,
//         'X':10,
//         'L':50,
//         'C':100,
//         'D':500,
//         'M':1000,
//     }
    
//     let result =0;
//     for(let i =0;i<s.length;i++){
//         const curr= myMap[s[i]]
//         const next= myMap[s[i+1]]
//         if(curr<next){
//             result+= next-curr;
//             i++

//         }else{
//             result+=curr
//         }
//     }
//     return result
    
// }


// const output= romanToInt("IX")
// console.log(output)