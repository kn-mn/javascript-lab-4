function greet(name = 'noone...') {
    return "Hello " + name;
}

let greeting = greet("anyone?");
console.log(greeting);

//

function addNumbers(num1, num2) {
    return num1 + num2
}

let add = addNumbers(10,20)
console.log(add)

//

let x = 10;

function changeValue() {
    let x = 11;
    console.log(x);
}

console.log(x);
changeValue();

//

function outerFunction() {
    let count = 0;
    return function() {
    count++
    return count;
    }
}

let counter = outerFunction();

console.log(counter());
console.log(counter());

//

let greetingTwo = greet()
console.log(greetingTwo)

//

function outerFunctionTwo(initialValue) {
    let countTwo = initialValue;
    return {
        less(){
            countTwo--;
            return countTwo;
        },
        reset(){
            countTwo = initialValue;
            return countTwo;
        }
    };
}

let counterTwo = outerFunctionTwo(2);

console.log(counterTwo.less());
console.log(counterTwo.less());
console.log(counterTwo.reset());
console.log(counterTwo.less());
console.log(counterTwo.less());
//