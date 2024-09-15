// constructor function in js is a special javascript function which is used
// to create an obj of same type 
// you define a constructor by usig the keyword function nd followed by name
// that start with  Uppercase letter 
//(called using the "new" keyboard).

function Laptop(name, model, color) {
    this.name = name;
    this.model = model;
    this.color = color;
}

const  laptop1 = new Laptop("Lenovo", "Thinkpadt460s", "black");
console.log(laptop1.name);
console.log(laptop1.model);
console.log(laptop1.color);

//another constructor function code.

function Person(name, occupation) {
    this.name = name;
    this.occupation = occupation;

    this.greeting = function() {
        console.log(`Hello my name is ${name} and i am ${this.occupation}!`);
    };
}

const person1 = new Person("Damilola", "Software developer");
person1.greeting();
 
function Smartphone(name, model, color, year) {
    this.name = name;
    this.model = model;
    this.color = color;
    this.year = year;
    this.updateYear = function() {
        return ++ this.year;
    };
}

let phone1 = new Smartphone("iphone", "12pro", "black", 2020);
console.log(phone1.name);
console.log(phone1.model);
console.log(phone1.color);
console.log(phone1.updateYear());

//let input = document.getElementById("text").innerHTML = text;


function clickMe() {
    let text = 10;

    if (text == 10) {
        console.log("You are welcome");
    } else if (text == 11) {
        console.log("invalid");
    }
    }
    clickMe();
