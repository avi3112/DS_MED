// 22+35 == 57
// 30/5 => 6

//vv technical ahuja

// 2nd march ==>>> 6/10 done
// 3nd march ==>>>  /15
// 4nd march ==>>>  /20
// 5nd march ==>>>  /25


// set and map in javascript

//Example :1
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

//3. Longest Substring Without Repeating Characters

const chat= function(s){
    //sliding window

    if(!s){
        return 0
    }
    let end=0
    let start=0
    let maxlength=0

    const uniquechar = new Set();

    while(end < s.length){
        if(!uniquechar.has(s[end])){
            uniquechar.add(s[end])
            end++
            maxlength = Math.max(maxlength,uniquechar.size)
        }else{
            uniquechar.delete(s[start])
            start++
        }
    }return maxlength

}

const result= chat("pwwkew")
console.log(result)






