const swap = (arr, left, right) => {
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
} 

const bubbleSort = nums => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        swap(nums, j, j + 1);
      }
    }
  }
}

const arr1 = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
console.log(arr1);
bubbleSort(arr1);
console.log(arr1);

