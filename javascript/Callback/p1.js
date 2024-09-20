let arr1 = [1, 2, 3, 4, 5, 6, 7, 8];

// Error handling: Throw error if the first argument is not an array or contains non-numeric values
function findSum(arr, cb) {
  if (!Array.isArray(arr) || arr.some(isNaN)) {
    throw new Error("The first argument has to be an array of numbers only.");
  }

  // Invoke the callback with the sum
  cb(arr);
}

// Sum function to add up all elements in the array
let sumArr = (arr) => {
  let res = arr.reduce((acc, curr) => acc + curr, 0);
  console.log(res);
};

// Call the function with proper arguments
findSum(arr1, sumArr);
