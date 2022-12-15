let test = [1, 15, 5, 4, 34]


function bubbleSort(arr) {
    const swap = (arr, idx1, idx2) => {
        let temp = arr[idx1]
        arr[idx1] = arr[idx2]
        arr[idx2] = temp
    }
    
    for( let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            // console.log(arr, arr[j], arr[j+1])
            if (arr[j] > arr[j+1]) {
                swap(arr, j, j+1)
            }
        }
    }
    return arr
}



console.log(bubbleSort(test))