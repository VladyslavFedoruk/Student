class Student {
    marks = [];
    constructor(name, lastName, yearOfBirthday) {
        this.name = name;
        this.lastName = lastName;
        this.yearOfBirthday = yearOfBirthday;
        this.visit = new Array(25).fill(undefined);
    }

    getAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.yearOfBirthday;
    }

    getAverage() {
        if (this.marks.length === 0) {
            return 0;
        } else {
            let sum = 0;
            for (let i = 0; i < this.marks.length; i++) {
                sum += this.marks[i];
                console.log(this.marks[i])
            }
            return sum / this.marks.length
        }
        // if (this.scores.length === 0)
        //     return 0;
        // const averageScore = this.scores.reduce((sum, currentValue) => sum + currentValue, 0);
        // return averageScore / this.scores.length;
    }

    present() {
        const findIndex = this.visit.findIndex(item => item === undefined);
        if (findIndex === -1) {
            console.warn('Масив відвідування студента не може мати більше 25 елементів')
        } else {
            this.visit[findIndex] = true;
        }
    }

    absent() {
        const findIndex = this.visit.findIndex(item => item === undefined);
        if (findIndex === -1) {
            console.warn('Масив відвідування студента не може мати більше 25 елементів')
        } else {
            this.visit[findIndex] = false;
        }
    }

    getVisit() {
        const getVisit = this.visit.filter(item => item === true).length;
        return getVisit / this.visit.length;

    }

    summary() {
        const averageQuantity = this.getAverage();
        const averageVisit = this.getVisit();
        switch (true) {
            case averageQuantity > 90 && averageVisit > 0.9:
                return "Молодець!";
            case averageQuantity > 90 || averageVisit > 0.9:
                return "Добре, але можна краще!";
            default:
                return "Редиска!";
        }
    }
}

let student1 = new Student('Ivan', 'Petrov', 2003);
student1.marks = [90, 32, 30, 20];
for (let i = 1; i <= 15; i++)
    student1.present();
student1.absent();
student1.absent();
student1.absent();


let student2 = new Student('Ivan', 'Sidirov', 200)
student2.marks = [90, 93, 89, 97];
for (let i = 1; i <= 15; i++)
    student2.present();
student2.absent();
student2.absent();
student2.absent();


let student3 = new Student('Vlad', 'petrycho', 2014)
student3.marks = [90, 93, 89, 99];
for (let i = 1; i <= 24; i++)
    student3.present();
student3.absent();

console.log(student1.summary());
console.log(student2.summary());
console.log(student3.summary());