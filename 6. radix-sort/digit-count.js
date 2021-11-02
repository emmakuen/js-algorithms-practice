// Optional helper functions useful for radix sort

const digitCount = (num) => {
    return num.toString().length
}

const mostDigits = (arr) => {
    let maxDigits = 0
    arr.forEach(num => {
        maxDigits = Math.max(maxDigits, digitCount(num))
    })
    return maxDigits
}