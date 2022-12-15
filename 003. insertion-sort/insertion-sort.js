newArr = [5, 22, 55, 2, 45, 21, 4, 6, 1];

function insertionSort(arr) {
  // consider the first element is in the sorted subarray and iterate over the remaining elements
  for (let i = 1; i < arr.length; i++) {
    const currentNum = arr[i];
    let currentNumIndex = i;

    // loop over the sorted subarray
    // if the current number is smaller than the element to its left, it's out of order
    for (
      let previousNumIndex = i - 1;
      previousNumIndex >= 0 && currentNum < arr[previousNumIndex];
      previousNumIndex--
    ) {
      // so, update the current index
      currentNumIndex = previousNumIndex;
      // and move the left element forward
      arr[previousNumIndex + 1] = arr[previousNumIndex];
    }

    // place the number at its sorted index
    arr[currentNumIndex] = currentNum;
  }

  return arr;
}

console.log(insertionSort(newArr));
