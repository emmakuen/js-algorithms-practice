// --- HELPERS
const getDigit = (num, digit) => {
  return Math.floor(Math.abs(num) / Math.pow(10, digit)) % 10;
};

const countDigits = (num) => {
  if (num === 0) return 1;

  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

const findMaxDigits = (nums) => {
  let maxDigits = 0;
  for (const num of nums) {
    // count digits of each number and compare it to the current max digits
    // update max digits count if the current number has more digits
    maxDigits = Math.max(maxDigits, countDigits(num));
  }

  return maxDigits;
};

// --- RADIX SORT IMPLEMENTATION
const radixSort = (nums) => {
  // find the maximum digit size
  const maxDigits = findMaxDigits(nums);

  // iterate over all the digits of nums
  for (let kthDigit = 0; kthDigit < maxDigits; kthDigit++) {
    // on each iteration,
    // create a new array with empty buckets representing each digit (10 buckets for digits 0 - 9)
    let digitBuckets = Array.from({ length: 10 }, () => []);

    // for each number in the nums array
    for (const num of nums) {
      // find the kth digit from the num
      const digit = getDigit(num, kthDigit);

      // from the digit buckets, find the bucket whose index is equal to current digit
      // push the num to that bucket -- this would sort nums based on the kth digit
      digitBuckets[digit].push(num);
    }

    // after the loop finishes, replace nums array with a new array with the sorted numbers
    nums = [].concat(...digitBuckets);
  }

  return nums;
};
