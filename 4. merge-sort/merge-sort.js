const mergeSort = (arr) => {
    if (arr.length <= 1) return arr
    
    let leftArr = mergeSort(arr.slice(0, arr.length/2))
    let rightArr = mergeSort(arr.slice(arr.length/2))
    
    return merge(leftArr, rightArr)
}


const merge = (sortedArr1, sortedArr2) => {
    let mergedArr = []
    let i = 0
    let j = 0
    while (i < sortedArr1.length && j < sortedArr2.length) {
        if(sortedArr1[i] < sortedArr2[j]) {
            mergedArr.push(sortedArr1[i])
            i++
        } else if (sortedArr1[i] > sortedArr2[j]) {
            mergedArr.push(sortedArr2[j])
            j++
        } else {
            mergedArr.push(sortedArr1[i], sortedArr2[j])
            i++
            j++
        }
        
    }
    if (j < sortedArr2.length ) {
        mergedArr = mergedArr.concat(sortedArr2.slice(j))
    } else if (i < sortedArr1.length) {
        mergedArr = mergedArr.concat(sortedArr1.slice(i))
    }
    
    return mergedArr
    
}

