class work {
    //creates instance of work with properties location, type, hoursWorked
    constructor (location, type, hoursWorked) {
        this.location = location;
        this.type = type;
        this. hoursWorked = hoursWorked;
    }
    
    //increments hoursWorked by 1 
    saveSomeMoney () {
    this.hoursWorked++;
    }
}




class Overtime extends work {
    //creates instance of overtime with work properties plus extra-cash earned, an array of strings
    constructor(location, type, hoursWorked, extraCash){
        super(location, type, hoursWorked);
        this.extraCash = extraCash;
    }
}

class myHours extends work {
    //creates instance of myHours with work properties plus isPaid, a boolean value
    constructor(location, type, hoursWorked, isPaid = true) {
        super(location, type, hoursWorked);
        this.isPaid = isPaid;
    }
    
    //lets go shopping!! if the money is above 1000, buy three shoes, otherwise buy only one.
    goShopping() {
        if (this.isPaid >= 1000){
            console.log('lets buy 3 shoes')
        } else {
            console.log('too bad, we can only buy 1 shoes')
        }
    } 
}

//below we will test our classes by instantiating them, calling each method, and verifying output

//create instance for each
let work = new work ('JWD', 'Google' , 'Soon');
let overtime = new overtime ('moreWork',24, true);
let myHours = new myHours ('moreShoes', 50, true)

//log each instance
console.log(work);
console.log(overtime);
console.log(myHours);

//call the method from the parent class to ensure it works as expected
work.saveSomeMoney();
overtime.saveSomeMoney();
myHours.saveSomeMoney();

//log the objects after calling .saveSomeMoney() to verify it worked as intended
console.log(work);
console.log(overtime);
console.log(myHours);

//call .goShopping
myHours.goShopping();

//check that .goshopping when myHours == true works as expected
console.log(myHours);
//check that .goshopping when myHours == false works as expected 
myHours.goShopping();



// class Person {
//     //creates instance of Person with properties name, age, and numBooksRead
//     constructor(name, age, numBooksRead) {
//         this.name = name;
//         this.age = age;
//         this.numBooksRead = numBooksRead;
//     }

//     //increments numBooksRead by 1
//     readNewBook() {
//         this.numBooksRead++;
//     }
// }

// class Electrician extends Person {
//     //creates instance of Electrician with Person properites plus certifications, an array of strings
//     constructor(name, age, numBooksRead, certifications) {
//         super(name, age, numBooksRead);
//         this.certifications = certifications;
//     }
// }

// class Teenager extends Person {
//     //creates instance of Teenager with Person properties plus isHungry, a boolean value
//     constructor(name, age, numBooksRead, isHungry = true) {
//         super(name, age, numBooksRead);
//         this.isHungry = isHungry;
//     }

//     //feeds the teenager.  If they are hungry, changes isHungry to false, if they are not hungry, prints message to console.
//     eat() {
//         if(this.isHungry) {
//             this.isHungry = false;
//         } else {
//             console.log('Oh no I think I ate too much')
//         }
//     }
// }


// //create instances of each class
// let person = new Person('Euthyphro', 35, 0);
// let electrician = new Electrician('Zeus', 28, 3, ['Lightning', 'Polymorphism']);
// let teen = new Teenager('Persius', 16, 5, true);

// //log each instance
// console.log(person);
// console.log(electrician);
// console.log(teen);

//call the method from the parent class to ensure it works as expected
// person.readNewBook();
// electrician.readNewBook();
// teen.readNewBook();
//log the objects after calling .readNewBook() to verify it worked as intended
// console.log(person);
// console.log(electrician);
// console.log(teen);

// //call .eat()
// teen.eat();

//check that .eat() when isHungry == true works as expected
// console.log(teen);

//check that .eat() when isHungry == false works as expected
// teen.eat();