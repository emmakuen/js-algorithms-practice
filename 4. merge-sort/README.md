# Merge Sort

<small>Time complexity: worst O(nlogn), average Θ(nlogn), best Ω(nlogn)</small><br/>
<small>Space complexity: O(n) for arrays, O(1) for linked lists</small>

## How It's Implemented

- It's a divide-and-conquer algorithm
- Decompose the array into smaller subarrays until they have zero or one elements (base case)
- Sort and merge subarrays until the whole array is sorted

## Advantages

- Efficiently sorts larger arrays
- More efficient than quick sort at sorting sequentially accessed data

## Disadvantages

- Slower on small number of elements compared to other sorting algorithms
- Requires an additional space as it doesn't sort in place (for arrays) and uses recursion
- Poorly performs on already sorted arrays compared to other sorting algorithms

## JavaScript Implementation

```javascript
const mergeSort = (arr) => {
  // return the array if its length is zero or one (this is the base case that should break the recursion)
  if (arr.length <= 1) return arr;

  // recursively call mergeSort function on the left and right subarrays
  const leftArr = mergeSort(arr.slice(0, arr.length / 2));
  const rightArr = mergeSort(arr.slice(arr.length / 2));

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
```
