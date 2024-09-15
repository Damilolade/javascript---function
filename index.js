//function to add to 2 num 
let x = 2 + 3;

function addNumbers(a, b) {
    return  a + b;
};

resuit = x;
//document.getElementById("Superdamidev").textContent = resuit;

console.log(x);

   let mysum = 3 + 7;

   function multiplyTwoNum(x, y) {
    return x * y; 
   };

   resuit = mysum;
   //document.getElementById("Superdamidev").textContent = resuit;

   console.log(mysum);

//callback function 
// callback function is used to pass an argument to another function 
// an argument is a value or data that are passes through parameter.

function multiplyByTwo(n, callback) {
    let resuit = n * 2; 
    callback(resuit);
};

function displayConsole(resuit) {
    console.log(resuit);
}
multiplyByTwo(6, displayConsole);

function displaypage(resuit) {
    document.getElementById("Superdamidev").textContent = resuit
}
multiplyByTwo(6, displaypage);

function myName(hello, callback) {
    let resuit = "hello " + " " + "Damilola";
    callback(resuit);
};

function displayConsole(resuit) {
    console.log(resuit);
}
myName("hello", displayConsole);

function displaypage(resuit) {
    document.getElementById("Superdamidev").textContent = resuit
}
myName("hello", displaypage);

//how to use default parameters
// default parameter allow you to set default value for parameter in case they are not passed wen the function is called.
// default value = undefined value.

function greet(name = "Olawepo Damiloal") {
    console.log(`Hello, ${name}!`)
};

greet();
greet("Oluwasogo David");

function greet(David, name = "Olawepo Damilola") {
    return David + name;
};
greet();
greet("Ojo David");

document.getElementById("Superdamidev").innerHTML = greet(`Hello ${name}`);

// set another default value 

function multiplyNums(K, T) {
    T = 3;
    return K * T;
    //console.log(K * T);
};
document.getElementById("Superdamidev").innerHTML = multiplyNums(5);

function fullName(lname, firstname = "Olawepo") {
    lname = "Damilola";
    occupation = "Software developer";
    return firstname + " " + lname + " is a " + occupation;
};

fullName();
fullName("lname")
fullName("occupation");
document.getElementById("Superdamidev").innerHTML = fullName();
//document.getElementById("Superdamidev").innerHTML = fullName("Olawepo");

function Array(myArray = "Apple, Banana, Orange", fruit) {
    fruit = "Mango";
    return fruit + " "  + myArray + " ";
};

Array();
Array("fruit");
document.getElementById("Superdamidev").innerHTML = Array();

function addNums(y, x) {
    x = 3;
    return x + y;
    console.log(x + y);
};
addNums()
addNums();
document.getElementById("Superdamidev").innerHTML = addNums(4);