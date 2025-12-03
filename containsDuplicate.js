// function duplicate (nums){
//     for(let i = 0 ; i< nums.length ; i++){
//         for(let j = i+1 ; j< nums.length ; j++){

//             if(nums[i] === nums[j]) {
//                 return true
//             }
//         }
//     }

//     return false
// }

// console.log(duplicate([1,2,3,4,5]));
  


// More optimize code 

function duplicate (nums){
    let seen = new Set()

    for(let value of nums){
        if(seen.has(value)){
            return true
        }
        seen.add(value)
    }
    return false
}


console.log(duplicate([1,2,3,4,5]));