/*
Valid Anagram
Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

Example 1:

Input: s = "racecar", t = "carrace"

Output: true
Example 2:

Input: s = "jar", t = "jam"

Output: false
*/



// function anagram (s , t){
//   if (s.length !== t.length) return false

//   return s.split('').sort().join('') == t.split('').sort().join('')
// }

// console.log(anagram("racecar" , "carrace"));
// console.log(anagram("jar" , "jam"));


// hash map method

const anagram = (s , t) =>{
  if(s.length !== t.length) return false

  let count = {}
  for(let char of s){
    count[char] = (count[char] || 0) +1
  
  }

  for(let char of t){
    if(!count[char]) return false
    count[char]--
  }
  return true
}

console.log(anagram("racecar" , "carrace"));
console.log(anagram("jar" , "jam"));