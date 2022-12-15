function bubbleSort(arr) {
  const swap = (arr, index1, index2) => {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  };

  // if no swap happens, the array is fully sorted
  // so, initialize a variable to check if items are swapped during the inner loop
  let isSwapped;

  // iterate over each item in the array
  // start the index from the last item to track where the sorted items start
  for (let i = arr.length - 1; i >= 0; i--) {
    // before the inner loop, set isSwapped to false as currently there's no swap
    isSwapped = false;

    // j should be less than i because items after i should be sorted
    for (let j = 0; j < i; j++) {
      // if currently selected adjacent elements are out of order, swap them in place
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        // if a swap happens, set the isSwapped variable to true
        isSwapped = true;
      }
    }
    // if there's no swap in the inner loop, break the outer loop
    if (!isSwapped) break;
  }

  return arr;
}
