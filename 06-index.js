//Closure =  A function defined inside of another function,
//inner function has access to the variable and scope of the
//outer function, Allow for private variable and state maintance
//used frequently in js framework, React, Vue, Angular.
//my definiton of Closure = is a function that access it own scope 
//and the scope of outer function,even when the outer function has
//retured.

/*function outer() {
    let name = "Dami";

    function inner () {
        console.log(name);
    }

    return inner;
}

const innerfunc = outer();
innerfunc();*/

/*function fun() {
    let x =  3 * 2;

    function inner () {
        console.log(x);
    }

    return inner;
}

const innerfun = fun();
innerfunc();*/

//createCounter

function createCounter() {
    let count = 0;

    return function() {
        count++;
        return count;
    }
}

const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

function first() {
   let y = "Adewuyi";

    function inner() {
        console.log(y);
    }

    return inner;
}

const innerfun = first();
innerfun();

function outer(name) {
    function inner(greeting) {
        console.log(`${greeting}, ${name}!`);
    }

    return inner;
}

const greeting = outer("Dami");
greeting("Hello");
greeting("How are you doing");

function myFun() {
    let y = 3 * 4;

    function inner() {
        console.log(y);
    }

    return inner;
}

const innerfunc = myFun ();
innerfunc ();