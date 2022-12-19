function swap(arr, i1, i2) {
  [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
}

function pivot(arr, startIndex, endIndex) {
  // take the last number as the pivot
  const pivotNum = arr[endIndex];
  // create the pivot index variable in order to find pivot number's sorted index
  let pivotIndex = startIndex;

  // for each number excluding the pivot
  for (let i = startIndex; i < endIndex; i++) {
    // if they're less than the pivot, swap it with the number at the pivot index
    // and increment the pivot index (because the pivot should come after that number)
    if (arr[i] < pivotNum) {
      swap(arr, pivotIndex, i);
      pivotIndex++;
    }
  }

  // place the pivot number in its sorted order and return its index
  swap(arr, endIndex, pivotIndex);
  return pivotIndex;
}

function quickSort(arr, startIndex = 0, endIndex = arr.length - 1) {
  // if start and end indexes overlap, there's no more number to sort
  if (startIndex >= endIndex) return;

  // else, find the pivot index
  const pivotIndex = pivot(arr, startIndex, endIndex);
  // and recursively sort the subarrays created from that pivot excluding the pivot itself
  quickSort(arr, startIndex, pivotIndex - 1);
  quickSort(arr, pivotIndex + 1, endIndex);
}
