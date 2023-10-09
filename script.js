class Student {

    //конструктор "Студент"
    constructor(name, surname, birthYear, marks) {
        this.name = name;
        this.surname = surname;
        this.birthYear = birthYear;
        this.marks = marks;
        this.presents = [];
    }

    //метод для отримання середньої оцінки
    getAverageMark() {
        if(this.marks.length !== 0) {
            let sum = 0;
            let averageMark = 0;
            for(let i = 0; i < this.marks.length; i++) {
                sum += this.marks[i];
            }
            averageMark = sum / this.marks.length;
            console.log(`Your average mark is ${averageMark.toFixed(2)}`);
            return averageMark;
        } else {
            console.log('You don\'t have marks');
            return 0;
        }

    }

    //метод для отримання віку
    getAge(birthYear) {
        const currentYear = new Date().getFullYear();
        let age = currentYear - this.birthYear;
        return console.log(`Age of student: ${age}`);

    }

    //метод для присутності
    present() {
        if (this.presents.length < 25) {
            this.presents.push(true);
            console.log('Your presence has been noted');
        } else {
            console.log('You\'ve already had 25 attendances');
        }
    }

    //метод для відсутності
    absent() {
        if (this.presents.length < 25) {
            this.presents.push(false);
            console.log('Your absence has been noted');
        } else {
            console.log('You\'ve already had 25 attendances');
        }
    }


    //метод підсумку
    summary() {
        let averageMark = this.getAverageMark();
        let averagePresent = this.presents.filter(status => status === true).length / 25;
        console.log(`Your averagePresent is ${averagePresent}`);
        if (averageMark > 90 && averagePresent > 0.9) {
            console.log('Молодець!');
        } else if (averageMark > 90 || averagePresent > 0.9) {
            console.log('Добре, але можна краще');
        } else {
            console.log('Редиска');
        }
    }
}

//student 1
const student1 = new Student('Kate', 'Pasenko', 2004, [60, 65, 70, 63, 67]);
student1.getAge();
student1.getAverageMark();
student1.present();
student1.absent();

let k = 0;
// do {
//     student1.present();
//     k++;
// } while(k < 25)

// do {
//     student1.absent();
//     k++;
// } while(k < 25)

student1.summary();

//student 2
const student2 = new Student('Emily', 'White', 2000, [100, 90, 90, 100]);
student2.getAge();
student2.getAverageMark();
// student2.present();
// student2.absent();

do {
    student2.present();
    k++;
} while(k < 25)

// do {
//     student2.absent();
//     k++;
// } while(k < 25)

student2.summary();