# Insertion Sort

<small>**Time complexity:**
<br/>- worst O(n2) comparisons and swaps
<br/>- average Θ(n2) comparisons swaps
<br/>- best Ω(n) comparisons, Ω(1) swaps<br/>
**Space complexity:** O(1)</small>

## Implementation

- Divide the array into one sorted and one unsorted subarray
- Iterate over each element in the unsorted subarray
- If the current element is smaller than the element to its left, shift that left element to the right
- Repeat the previous step until the correct place for the current number is found
- Place the current number at its sorted index and move on to the next element in the unsorted subarray

## Advantages

- Simple to implement
- Efficient for small or largely sorted arrays (time complexity of O(kn) when each element in the arr is no more than k places away from its sorted position)
- More efficient than selection sort and bubble sort
- Works well with data coming in live (online algorithm)

## Disadvantages

- Inefficient when sorting large arrays
- Requires more writes compared to selection sort

## JavaScript Implementation

```javascript
function insertionSort(arr) {
  // consider the first element is in the sorted subarray and iterate over the remaining elements
  for (let i = 1; i < arr.length; i++) {
    const currentNum = arr[i];
    let currentNumIndex = i;

    // loop over the sorted subarray
    // if the current number is smaller than the element to its left, it's out of order
    for (
      let previousNumIndex = i - 1;
      previousNumIndex >= 0 && currentNum < arr[previousNumIndex];
      previousNumIndex--
    ) {
      // so, update the current index
      currentNumIndex = previousNumIndex;
      // and move the left element forward
      arr[previousNumIndex + 1] = arr[previousNumIndex];
    }

    // place the number at its sorted index
    arr[currentNumIndex] = currentNum;
  }

  return arr;
}
```
