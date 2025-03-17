///// Задание 1 /////

const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(n => n * n);

console.log(squares);

///// Задание 2 /////

const user = {
    name: "София",
    greet: function () {
        setTimeout(() => {
            console.log(`Hello, my name is ${this.name}!`);
        }, 1000);
    }
};

///// Задание 3 ////

const applyFunctionToArray = (fn, array) => array.map(fn);

const numbers1 = [1, 2, 3, 4, 5];

const square = (x) => x * x;

const squaredNumbers = applyFunctionToArray(square, numbers1);

console.log(squaredNumbers);