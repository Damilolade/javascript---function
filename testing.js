let name = "Dami";

function greeting() {
    return `Hello ${name}!`;
};

console.log(greeting());

/*let x = 2 + 1;

function addNums() {
    resuit = x;
    return a + b;
};
console.log(x);

let y = 3 * 2;

function multiplyNums() {
    resuit = y;
    return k * t;
};

console.log(y); */

//Callback function.

function myGreeting(Hello, callback) {
    let resuit = Hello + " " + "Damilola";
    callback(resuit);
}

function displayConsole(resuit) {
    console.log(resuit);
}
myGreeting("Hello", displayConsole);

function multiplyByTwo(n, callback) {
    let resuit = n * 2;
    callback(resuit);
};

function displayConsole(resuit) {
    console.log(resuit);
}
multiplyByTwo(6, displayConsole);

function myFullName(Olawepo, callback) {
    let resuit = "Olawepo" + " " + "Damilola";
    callback(resuit);
};

function displayConsole(resuit) {
    console.log(resuit);
}
myFullName("Damilola", displayConsole);

//Default value javascript has a features called default parameter.
//they allow you to set a default value for parameter in case they are not passed
// when the function is called.

function addNumbers(sum = 2 + 1) {
    console.log(sum);
};
addNumbers()
addNumbers(3 * 2);

let x = 2 + 3;

function addNumbers(a, b) {
    return a + b;
};

console.log(x);

let a = 3 * 9;
 function multiplyTwoNums(x, y) {
    return x * y;
 };

 console.log(a);

 const me = "Dami";

 function greet() {
    return (`Hello ${name}!`);
 };
 console.log(`Hello ${me}!`);

 