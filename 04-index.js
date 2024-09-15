//calling of function in js 
// with call method you can write a function method that can be used on different obj.
// All are method, in javascript all function are obj method.

const person = {
    firstName: "Olawepo",
    lastName: "Damilola",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

//document.getElementById("Superdamidev").innerHTML = person.fullName();

const myArray = { 
     firstBrand: "iphone", 
    secondBrand: "Samsung", 
     thirdBrans: "infinix", 
     fourthBrand: "tecno",
     multipleBrand: function() {
        return this.firstBrand + " " + this.thirdBrand + " " + this.secondBrand;
     }
}
//console.log(myArray.multipleBrand());
//document.getElementById("Superdamidev").innerHTML = myArray.multipleBrand();

// The call() method with argument
//The call() method can accept argument.

const dami = { 
    fullName: function(city, country) {
   return this.firstName + " " + this.lastName + " " + city + " " + country;
}
}
const dami1 = {
    firstName: "Olawepo",
    lastName: "Damilola",
}
document.getElementById("Superdamidev").innerHTML = dami.fullName.call(dami1,  "lagos", "nigeria");

const Obj = {
    fullBrand: function(type, year) {
        return this.firstBrand + " " + type + " " + year;
    }
}
const smartphone = {
    firstthBrand:"iphone",
 }
 document.getElementById("Superdamidev").innerHTML = Obj.fullBrand.call(smartphone, "12pro", 2020);

 const Obj1 = {
    fullBrand: func  tion(type, year) {
        return this.firstBrand + " " + type + " " + year;
    }
}
const smartphone1 = {
        thirdBrand: "infinix"
}
 document.getElementById("Superdamidev").innerHTML = Obj.fullBrand.call(smartphone, "smart 8", 2023);

 // calling of function
 const fruit = {
    fisrtfruit:"Apple",
    secondfruit:"Banana",
    myFruit: function() {
        return this.fisrtfruit + " " + this.secondfruit;
     }
 }

 console.log(fruit.myFruit());
 document.getElementById("Superdamidev").innerHTML = fruit.myFruit();

 const Damilola = {
    firstName: "Olawepo",
    lastName: "Sheriff", 
    gender:   "Male",
    age: 20,
    school: "Yaba college of Technology",
    department: "Computer Science",
    level:  200,
    Document: function() {
        return this.firstName + " " + this.lastName + "  is " + this.age + " year old! student of " 
        + " " + this.school + " department of" 
        + this.department;
    } 
 }
 console.log(Damilola.Document());
 document.getElementById("Superdamidev").innerHTML = Damilola.Document();

//apply() method.

const Obj = {
    fullObj: function(year, color) {
        return "This model of  is " + this.model + " " + this.brand + " " + year + " " + color;
    }
}
    const obj1 = {
    model:"window 10pro  T460S",  
    brand: "Lenovo",
}

console.log(Obj.fullObj.apply(obj1, [2023, "Black"]));
document.getElementById("Superdamidev").innerHTML = Obj.fullObj.apply(obj1, [2023, "Black"]);

const Person = {name: " Dami"};

let greeting = function(a, b) {
    return `${a} ${this.name} ${b}!`;
};

console.log(greeting.apply(Person, ["Hello", "how are you"]));

const Product = {
fullProduct: function(year, color) {
        return "This phone is " + this.Brand + " " + this.model + " " + year + " " + color;
    }
}
const product1 = {
    Brand: "Infinix",
    model: "smart4"
}

console.log(Product.fullProduct.apply(product1, [2022, "Blue"]));
