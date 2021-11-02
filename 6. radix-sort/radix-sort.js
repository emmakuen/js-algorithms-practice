const myArr = [1556, 4, 3556, 593, 408, 4386, 902, 7, 8157, 86, 9637, 29]

const getDigit = (num, n) => {
    return Math.floor(Math.abs(num) / Math.pow(10, n)) % 10
}

const radixSort = (nums) => {
    let digitBuckets = Array.from({length: 10}, () => [])
    let digit = 0
    while(digitBuckets[0].length < nums.length) {
        digitBuckets = Array.from({length: 10}, () => [])
        nums.forEach(num => {
            digitBuckets[getDigit(num, digit)].push(num)
        })
        nums = [].concat(...digitBuckets)
        digit += 1
    }

    return nums
}

console.log(radixSort(myArr))


