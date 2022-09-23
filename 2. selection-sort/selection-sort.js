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
