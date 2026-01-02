function topK(nums , k){
    let freqMap = new Map()

    for(let num of nums){
        freqMap.set(num,(freqMap.get(num)|| 0) +1)
    }

    const bucket = Array(nums.length + 1).fill().map(()=>[])

    for(let [num ,freq] of freqMap){
        bucket[freq].push(num)
    }

    let result = []
    for(let i = bucket.length -1 ; i >=0 && result.length < k ; i--){
        for(let num of bucket[i]){
        result.push(num)
        if(result.length === k) break
        }
    }
    return result
}

console.log(topK([1,2,2,3,3,3],2));
