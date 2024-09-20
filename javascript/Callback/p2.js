let arr = [1, 2, 3, 4, 5];
//write a function that will take 2 parameters
//first parameter is an array and second one is a callback function
//multiply each element of the array by 2.
//you have to invoke the callback function by passing the array as argument after 2 seconds;

function asynchronous1(arr, callback) {
  //write your code here

  callback(arr);

}

asynchronous1(arr, (a) => {
  let res = a.map((i) => i * 2)
  console.log(res);
});
