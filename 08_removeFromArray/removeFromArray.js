const removeFromArray = function(arr, ...nums) {
  for (let i = 0; i < arr.length; i++) {
    if (nums.includes(arr[i])) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
};
module.exports = removeFromArray;
