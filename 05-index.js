 //the bind() method allow an object to borrow from another object without copiny.

/*const person = {
    fname: "Olawepo",
    lname: "Damilola",
    age : 20,
    sch: "Yaba college of Technology",
    fullName: function(){
       return this.fname + " " + this.lname + " " + this.age + " " + this.sch;
    }
}

const  member = {
    fname: "Oluwasongo",
    lname: "David",
    age: 20,
    sch: "Yaba college of Technology",
    fullName: function () {
        console.log(this.fname + " " + this.lname + " is " + this.age + " year old!  student of " + this.sch);
    return this.fname + " " + this.lname;
    } 
}
   let fullName = person.fullName.bind(member);
    member.fullName(); */

    //in this code the obj has a display method
    
    const person= {
        fname: "Olawepo",
        lname: "Damilola",
        display: function () {
            let x = document.getElementById("Superdamidev");
            x.innerHTML = this.fname + " " + this.lname;
        }
    }
    setTimeout(person.display, 3000);

    //To this problem we apply bind() method to the code.

    const person1 = { 
        fname:"Olawepo",
        lname:"Damilola",
        display: function () {
            let x = document.getElementById("Superdamidev");
            x.innerHTML = this.fname + " " + this.lname;
        }
    }

    let display = person1.display.bind(person1);
    setTimeout(display, 3000);