"use strict";
/////////// Student Managment System /// /////////
class Student {
    constructor(Name, courses) {
        this.studentID = Student.idcounter++;
        this.Name = Name;
        this.Courses = courses;
        this.Balance = 0;
    }
    ////////// Enrol //////////
    enrol(course) {
        this.Courses.push(course);
        console.log(`${this.Name} has been enrolled in ${course}.`);
    }
    //////////// Veiw Balace ///////////
    veiwbalance() {
        console.log(`Balance for ${this.Name}: $${this.Balance}`);
    }
    ////////////// Pay Tution Fees ////////////
    paytution(amount) {
        this.Balance -= amount;
        console.log(`${this.Name} has paid $${amount} toward tution`);
    }
    ///////////// Student Status  ///////////
    Showstatus() {
        console.log(`
        Name:${this.Name}
        Student ID : ${this.studentID}
        Course Enrolled: ${this.Courses.join(`,`)}
        Balance: $${this.Balance}
        `);
    }
}
Student.idcounter = 34000;
let Student1 = new Student("Muhsin", ["Web", "Graphics"]);
Student1.enrol("Web-Development");
Student1.veiwbalance();
Student1.paytution(1000);
Student1.Showstatus();
let Student2 = new Student("Ahsan", ["Web", "Graphics"]);
Student2.enrol("Web-Development");
Student2.veiwbalance();
Student2.paytution(1000);
Student2.Showstatus();
