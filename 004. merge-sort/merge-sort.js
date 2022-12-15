const mergeSort = (arr) => {
  // return the array if its length is zero or one (this is the base case that would break the recursion)
  if (arr.length <= 1) return arr;

  const midpoint = Math.floor(arr.length / 2);
  // recursively call current function on the left and right subarrays
  const leftArr = mergeSort(arr.slice(0, midpoint));
  const rightArr = mergeSort(arr.slice(midpoint));

  // after the recursive calls, merge sorted arrays and return it
  return merge(leftArr, rightArr);
};

const merge = (sortedArray1, sortedArray2) => {
  let mergedArray = [];
  let index1 = 0;
  let index2 = 0;

  while (index1 < sortedArray1.length && index2 < sortedArray2.length) {
    // compare elements from two sorted arrays
    // push whichever's smaller to the merged array
    // and increment that array's index
    if (sortedArray1[index1] < sortedArray2[index2]) {
      mergedArray.push(sortedArray1[index1]);
      index1++;
    } else if (sortedArray1[index1] > sortedArray2[index2]) {
      mergedArray.push(sortedArray2[index2]);
      index2++;
    } else {
      // if two elements are equal, push both to the merged array and increment both indexes
      mergedArray.push(sortedArray1[index1], sortedArray2[index2]);
      index1++;
      index2++;
    }
  }

  // after the loop, one of the sorted arrays may have some elements left unmerged
  // if so, merge the remaining elements to the merged array
  if (index2 < sortedArray2.length) {
    mergedArray = mergedArray.concat(sortedArray2.slice(index2));
  } else if (index1 < sortedArray1.length) {
    mergedArray = mergedArray.concat(sortedArray1.slice(index1));
  }

  return mergedArray;
};
