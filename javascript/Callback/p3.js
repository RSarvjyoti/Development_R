// ### Create a function called `Multiplier` that will take an `array` ,`value`  & `a callback function` as `parameters` invoke the callback with one array of the same length as the input array multiplying each element of the array by the given number.
function Multiplier(array, value, callback) {
    //write your code here..

    callback(arr, value);
  }

  // ### Create a function called `findOdd` that will take an `array` & `a callback function` as `parameters` invoke the callbak with one array having odd elements in it.
  function findOdd(array, callback) {
    //write your code here...
    callback(array);
  }

  function odd(arr) {
    let res = arr.filter((item) => item % 2 == 0);
    console.log(res);
  }
  
  // ### Create a function called `findSum` that will take an `array` & `a callback function` and  invoke thecallback with the sum of all the elements in the array.
  function findSum(arr, callback) {
    //write your code here...
    callback(arr);
  }

  function sum(arr) {
    let res = arr.reduce((i, j) => i + j, 0);
    console.log(res);
  }
  
  let arr = [1, 2, 3, 4];
  
  
  function multiplying(array, value) {
    let res = array.map((item) => item * value);
    console.log(res);
  }

  Multiplier(arr, 3, multiplying);
  findOdd(arr, odd);
  findSum(arr, sum);
  