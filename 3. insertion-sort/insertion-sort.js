newArr = [5, 22, 55, 2, 45, 21, 4, 6, 1];

function insertionSort(arr) {
  // consider the first element is in the sorted subarray and iterate over the remaining elements
  for (let i = 1; i < arr.length; i++) {
    const currentNum = arr[i];
    let currentIndex = i;

    // loop over the sorted subarray
    // if the current number is smaller than the element to its left, it's out of order
    for (
      let previousIndex = i - 1;
      previousIndex >= 0 && currentNum < arr[previousIndex];
      previousIndex--
    ) {
      // so, update the current index
      currentIndex = previousIndex;
      // and move the left element forward
      arr[previousIndex + 1] = arr[previousIndex];
    }

    // place the number at its sorted index
    arr[currentIndex] = currentNum;
  }

  return arr;
}

console.log(insertionSort(newArr));
