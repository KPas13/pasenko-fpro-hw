class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    printInfo() {
        console.log(`Name: ${this.name}\n Age: ${this.age}`);
    }

}

class Car {
    constructor(mark, model, year, carNumber) {
        this.mark = mark;
        this.model = model;
        this.year = year;
        this.carNumber = carNumber;
        this.owner = null;
    }

    addOwner(person) {
        if(person instanceof Person) {
            if(person.age > 18) {
                this.owner = person;
                console.log('Owner is successfully added');
            } else {
                console.log('The owner is too young');
            }
        } else {
            console.log('The owner is not the instance of class Person');
        }
    }

    printInfoCar() {
        if(this.owner){
            console.log(`Mark: ${this.mark},\n Model: ${this.model},\n Year: ${this.year},\n Car number: ${this.carNumber},\n Owner: Name: ${this.owner.name},\n Age: ${this.owner.age}`);
        } else {
            console.log(`Mark: ${this.mark},\n Model: ${this.model},\n Year: ${this.year},\n Car number: ${this.carNumber},\n Owner: null `);
        }
    }
}

let person1 = new Person('Nobara', 16);
let person2 = new Person('Gojo', 29);
let person3 = new Person('Inumaki', 17);
let person4 = 'Megumi';

person1.printInfo();
person2.printInfo();
person3.printInfo();

let car1 = new Car('Toyota', 'Prado', 2018, 'AX2804CI');
let car2 = new Car('Volkswagen', 'Jetta', 2011, 'CA1305AX');
let car3 = new Car('Volkswagen', 'Golf', 2011, 'BA2567HA');

car1.addOwner(person1);
car2.addOwner(person2);
car3.addOwner(person4);

car1.printInfoCar();
car2.printInfoCar();
car3.printInfoCar();

