const testArr = [9, 5, 2, 1, 8, 4, 7, 6, 3];

const swap = (array, index1, index2) => {
  // swap elements in place
  [array[index1], array[index2]] = [array[index2], array[index1]];
};

const partition = (array, startIndex, endIndex) => {
  // take the element at start index as pivot
  const pivot = array[startIndex];
  // create two pointers
  let left = startIndex;
  let right = endIndex;

  // loop over the elements from both sides until the pointers meet to find the sorted position of the pivot
  // left elements should be less than the pivot
  // right elements should be greater than the pivot

  while (left < right) {
    // keep moving the left pointer forward until the pointer encounters an element greater than the pivot
    while (array[left] <= pivot) {
      left++;
    }

    // keep moving the right pointer backwards until it encounters an element less than the pivot
    while (array[right] > pivot) {
      right--;
    }

    // if two pointers haven't met, swap left and right elements and move both pointers
    if (left < right) {
      swap(array, left, right);
      left++;
      right--;
    }
  }

  // after the loop ends, two pointers would have met and right would be the sorted position of the pivot
  // put the pivot in its correct index
  swap(array, startIndex, right);

  // return the pivot index
  return right;
};

const quickSort = (arr, startIndex = 0, endIndex = arr.length - 1) => {
  // if start index is less than the end index, don't make recursive calls (base case)
  // else
  if (startIndex < endIndex) {
    // choose a pivot element and find its sorted position after placing elements to its right or left
    // based on whether they're greater or less than the pivot
    const pivotIndex = partition(arr, startIndex, endIndex);

    // using the pivot element's position, divide array into two subarrays
    // and call the quick sort recursively
    quickSort(arr, startIndex, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, endIndex);
  }

  return arr;
};

console.log(quickSort(testArr));
