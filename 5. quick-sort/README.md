# Quick Sort

<small>Time complexity: worst O(n2), average Θ(nlogn), best Ω(nlogn)</small><br/>
<small>Space complexity: O(logn) for recursion</small>

- It's a divide-and-conquer algorithm that sorts in place
- Choose a pivot element from the list
- Compare each element to the pivot and place those less than the pivot to its left and greater than the pivot to its right; this will place the pivot in its sorted position
- Using the pivot element's position, divide the array into two subarrays and sort subarrays recursively

## Advantages

- Doesn't require much additional memory as it sorts in place
- Efficient on large lists
-

## Disadvantages

- Performs slower on small lists compared to quadratic algorithms
- Requires quadratic time in the worst-case (already sorted lists)

## JavaScript Implementation

```javascript
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
```
