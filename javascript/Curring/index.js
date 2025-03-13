// 1) curring using bind method

let multiply = function(x, y) {
    console.log(x * y);
}

let multiplyByTwo = multiply.bind(this, 2, 3);
multiplyByTwo();

// 2) curring using clouser

let multiplies = function (x) {
    return function(y) {
        console.log(x * y);
    }
}

let multiplyByThree = multiplies(4);
multiplyByThree(3);