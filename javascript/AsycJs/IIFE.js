// Imiditely invoked the function expression

(() => {
  var name = "Sarvjyoti";
  var greet = () => {
    console.log("Good morning");
  };

  greet();
  console.log(name);
})();
