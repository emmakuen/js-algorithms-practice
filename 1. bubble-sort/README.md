# Bubble Sort

<small>Time complexity: worst O(n2), average Θ(n2), best Ω(n)</small><br/>
<small>Space complexity: O(1)</small>

## How It's Implemented

- It sorts a list of items in memory by repeatedly comparing each pair of adjacent items and swapping them if they're out of order util the list is sorted.
- In bubble sort, low values bubble to the top and large values sink to the bottom (to the end of the list).

## Advantages

- Easy to understand and implement
- Data is sorted in place, so it doesn't require lots of additional memory
- Performs faster than algorithms like quick sort when the list is mostly sorted

## Disadvantages

- Bubble sort gets dramatically slower on larger lists
- Among simple O(n2) sorting algorithms, other algorithms like insertion sort are more efficient

## JavaScript Implementation

```javascript
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
```
