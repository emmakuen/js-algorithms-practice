let nearlySortedArr = [1, 15, 5, 16, 27, 34]


function bubbleSort(arr) {
    const swap = (arr, idx1, idx2) => {
        let temp = arr[idx1]
        arr[idx1] = arr[idx2]
        arr[idx2] = temp
    }
    
    let noSwaps
    for( let i = arr.length; i > 0; i--) {
        noSwaps = true
        for (let j = 0; j < i - 1; j++) {
            console.log(arr, arr[j], arr[j+1])
            if (arr[j] > arr[j+1]) {
                swap(arr, j, j+1)
                noSwaps = false
            }
        }
        if (noSwaps) break
    }
    return arr
}



console.log(bubbleSort(nearlySortedArr))