const testArr = [9, 5, 2, 1, 8, 4, 7, 6, 3]

const quickSort = (arr) => {
    let leftArr = []
    let rightArr = []
    if (arr.length <= 1) return arr
    leftArr = quickSort(arr.slice(1).filter(num => num <= arr[0]))
    rightArr = quickSort(arr.slice(1).filter(num => num > arr[0]))
    let newPivotIdx = leftArr.length
    arr[newPivotIdx] = arr[0]
    for (let i=0; i < newPivotIdx; i++) {
        arr[i] = leftArr[i]
    }
    for (let i=newPivotIdx + 1; i < arr.length; i++) {
        arr[i] = rightArr[i-newPivotIdx-1]
    }
    console.log(arr)
    return arr
}

quickSort(testArr)