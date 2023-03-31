function Student({ studentName, studentSurname, studentBirthYear, studentGrades }) {
    this.name = studentName;
    this.surname = studentSurname;
    this.birthYear = studentBirthYear;
    this.grades = studentGrades;
    this.attendance = [...Array(25)];
    this.getAge = () => {
        const currentDate = new Date();
        let age = currentDate.getFullYear() - this.birthYear;
        return age;
    }
    this.getAverageGrade = () => {
        let averageGrade = (this.grades.reduce((x, y) => x + y) / this.grades.length).toFixed(1);
        return averageGrade;
    }
    this.present = () => {
        for (let i = 0; i < this.attendance.length; i++) {
            if (this.attendance[i] === undefined) {
                this.attendance[i] = true;
                break
            }
        }
        return this.attendance;
    }
    this.absent = () => {
        for (let i = 0; i < this.attendance.length; i++) {
            if (this.attendance[i] === undefined) {
                this.attendance[i] = false;
                break
            }
        }
        return this.attendance;
    }
    this.summary = function () {
        let grade = this.getAverageGrade();
        let attendanceNum = this.attendance.filter(presence => presence === true).length;
        let classesNum = this.attendance.filter(classes => classes !== undefined).length;
        let averageAttendance = (attendanceNum / classesNum).toFixed(1);
        console.log('Середній бал: ' + student.getAverageGrade() + '; Середнє відвідування: ' + averageAttendance);
        if (grade > 90 && averageAttendance > 0.9) {
            console.log('Молодець!');
        } else if (grade < 90 && averageAttendance < 0.9) {
            console.log('Редиска!');
        } else {
            console.log('Добре, але можна краще');
        }
    }
}
const student = new Student({
    studentName: 'Іван',
    studentSurname: 'Денисенко',
    studentBirthYear: 1999,
    studentGrades: [100, 100, 75]
})
const student2 = new Student({
    studentName: 'Борис',
    studentSurname: 'Гнатюк',
    studentBirthYear: 2001,
    studentGrades: [100, 85, 98]
})

document.querySelector('.js--info_btn').addEventListener('click', function () {
    console.log(student.name + ' ' + student.surname + '; Вік: ' + student.getAge() + '; Середній бал: ' + student.getAverageGrade())
});
document.querySelector('.js--present_btn').addEventListener('click', function () {
    student.present()
});
document.querySelector('.js--absent_btn').addEventListener('click', function () {
    student.absent()
});
document.querySelector('.js--summary_btn').addEventListener('click', function () {
    student.summary()
});
document.querySelector('.js--info_btn-2').addEventListener('click', function () {
    console.log(student2.name + ' ' + student2.surname + '; Вік: ' + student2.getAge() + '; Середній бал: ' + student2.getAverageGrade())
});
document.querySelector('.js--present_btn-2').addEventListener('click', function () {
    student2.present()
});
document.querySelector('.js--absent_btn-2').addEventListener('click', function () {
    student2.absent()
});
document.querySelector('.js--summary_btn-2').addEventListener('click', function () {
    student2.summary()
});


