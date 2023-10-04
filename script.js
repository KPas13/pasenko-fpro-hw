class Person {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
}


class Apartment {
    constructor() {
        this.residents = [];
    }

    addResident(person) {
        if(person instanceof Person) {
            this.residents.push(person);
            console.log(`New resident: ${person.name}, ${person.sex}`);
        } else {
            console.log('Resident not the instance of class Person');
        }

    }
}


class House {
    constructor(maxApartments) {
        this.apartments = [];
        this.maxApartments = maxApartments;
    }

    addApartment(apartment) {
        if (apartment instanceof Apartment) {
            if (this.apartments.length < this.maxApartments) {
                this.apartments.push(apartment);
                console.log('The apartment was successfully added');
            } else {
                console.log('The number of apartments exceeds the maximum permissible number.');
            }
        } else {
            console.log('Add an instance to the Apartment class.');
        }
    }
}

let person1 = new Person('Kate', 'female');
let person2 = new Person('Jack', 'male');
let person3 = 'Mick';

let apartment1 = new Apartment();
let apartment2 = new Apartment();
let apartment3 = 3;

apartment1.addResident(person1);
apartment1.addResident(person2);
console.log(apartment1);

apartment2.addResident(person3);
console.log(apartment2);

let house = new House(10);

house.addApartment(apartment1);
console.log(house);
house.addApartment(apartment2);
console.log(house);
house.addApartment(apartment3);
console.log(house);
// house.addApartment(apartment2);
// house.addApartment(apartment2);
// house.addApartment(apartment2);
// house.addApartment(apartment2);
// house.addApartment(apartment2);
// house.addApartment(apartment2);
// house.addApartment(apartment2);
// house.addApartment(apartment2);
// house.addApartment(apartment2);


