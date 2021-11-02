const newArr = [5,7,11,2,22,3,1,80,30,45]

function selectionSort(arr) {
    for (let i=0; i<arr.length; i++) {
        let lowestNumIdx = i
        for (let j=i+1; j<arr.length; j++) {
            // console.log(arr[lowestNumIdx], arr[j])
            if (arr[lowestNumIdx] > arr[j]) {
                lowestNumIdx = j
            }
        }
        if (i !== lowestNumIdx){
            console.log(arr[i], arr[lowestNumIdx])
            let temp = arr[i]
            arr[i] = arr[lowestNumIdx]
            arr[lowestNumIdx] = temp
        }
        // console.log(arr)
    }
    return arr
} 
array = selectionSort(newArr)
console.log(array)