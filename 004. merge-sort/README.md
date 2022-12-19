# Merge Sort

<small>Time complexity: worst O(nlogn), average Θ(nlogn), best Ω(nlogn)</small><br/>
<small>Space complexity: O(n) for arrays, O(logn) for linked lists</small>

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
const mergeSort = (nums) => {
  // return the array if its length is zero or one (this is the base case that would break the recursion)
  if (nums.length <= 1) return nums;

  const mid = Math.floor(nums.length / 2);
  // divide the array into left and right subarrays and recursively sort them
  const sortedLeft = mergeSort(nums.slice(0, mid));
  const sortedRight = mergeSort(nums.slice(mid));

  // after the recursive calls, merge sorted arrays and return it
  return merge(sortedLeft, sortedRight);
};

const merge = (arr1, arr2) => {
  let mergedArr = [];
  let index1 = 0;
  let index2 = 0;

  while (index1 < arr1.length && index2 < arr2.length) {
    // compare elements from two sorted arrays
    // push whichever's smaller to the merged array
    // and increment that array's index
    if (arr1[index1] < arr2[index2]) {
      mergedArr.push(arr1[index1]);
      index1++;
    } else {
      mergedArr.push(arr2[index2]);
      index2++;
    }
  }

  // after the loop, one of the sorted arrays may have some elements left unmerged
  // if so, merge the remaining elements to the merged array
  while (index2 < arr2.length) {
    mergedArr = mergedArr.push(arr2[index2]);
    index2++;
  }
  while (index1 < arr1.length) {
    mergedArr = mergedArr.push(arr1[index1]);
    index1++;
  }

  return mergedArr;
};
```
