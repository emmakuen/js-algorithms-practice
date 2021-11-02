newArr = [5, 22, 55, 2, 45, 21, 4, 6, 1]

function insertionSort(arr) {
    for (let i=1; i<arr.length; i++) {
        let swapVal = arr[i]
        let swapIdx = i
        for (let j=i-1; j>=0 && swapVal < arr[j]; j--) {
            arr[j+1] = arr[j]
            swapIdx = j
        }
        arr[swapIdx] = swapVal
        // console.log(arr)
    }
}

insertionSort(newArr)