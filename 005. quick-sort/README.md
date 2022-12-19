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
- Requires quadratic time in the worst-case (when repeatedly choosing maximum or minimum elements as the pivot)

## JavaScript Implementation

```javascript
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

```
