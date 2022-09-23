# Selection Sort

<small>**Time complexity:**
<br/>- worst O(n2) comparisons O(n) swaps
<br/>- average Θ(n2) comparisons Θ(n) swap
<br/>- best Ω(n2) comparisons, Ω(1) swaps</small><br/>
<small>**Space complexity:** O(1)</small>

## How It's Implemented

- Divide the list of items into two parts: a sorted subarray at the front, and an unsorted subarray with the remaining items
- Find the minimum element from the unsorted subarray and swap it with the first element of the unsorted subarray
- Move the subarray boundary by one element to the right

## Advantages

- Easy to understand and implement
- Minimal use of additional memory as it sorts the array in place
- Performs well on small (fewer than 10 - 20 items) or already sorted arrays
- Almost always outperforms bubble sort and gnome sort

## Disadvantages

- Performs worse than the similar insertion sort
- Substantially outperformed on larger arrays by divide-and-conquer algorithms

## JavaScript Implementation

```javascript
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    // initialize a variable to track at which index the minimum number is stored
    let minNumIndex = i;

    // loop over the unsorted part of the array
    for (let j = i + 1; j < arr.length; j++) {
      // if current element is smaller than the element at minNumIndex, make it the new minimum and update minNumIndex
      if (arr[minNumIndex] > arr[j]) {
        minNumIndex = j;
      }
    }

    // if the minimum number of the subarray is not at its correct index, swap it
    if (i !== minNumIndex) {
      let temp = arr[i];
      arr[i] = arr[minNumIndex];
      arr[minNumIndex] = temp;
    }
  }

  return arr;
}
```
