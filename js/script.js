class Student {
  constructor(name, id, grades, attendance) {
    this.name = name;
    this.id = id;
    this.grades = grades;
    this.attendance = attendance;
  }
  getAverage() {
    const total = this.grades.reduce((acc, grade) => acc + grade, 0);
    return total / this.grades.length;
  }

  getGrade() {
    const avrg = this.getAverage();
    if (avrg >= 90) return 'A';
    else if (avrg >= 80) return 'B';
    else if (avrg >= 70) return 'C';
    else if (avrg >= 60) return 'D';
    else if (avrg >= 50) return 'E';
    else return 'F';
  }
  getResult() {
    if (this.getAverage() >= 50 && this.attendance >= 75) {
      return 'true';
    } else {
      return 'false';
    }
  }
}

const studentsList = [
  new Student('omar', 1, [85, 90, 88], 95),
  new Student('mohmed', 2, [70, 65, 72], 80),
  new Student('yousedf', 3, [45, 42, 48], 88),
  new Student('Akram', 4, [40, 44, 41], 90),
];


console.log(' تقرير جميع الطلاب ');
studentsList.map(s => {
  console.log(`${s.name} | متوسط: ${s.getAverage().toFixed(2)} | تقدير: ${s.getGrade()} | نتيجة: ${s.getResult()}`);
});


const needSupport = studentsList.filter(s => {
  const avg = s.getAverage();
  return avg >= 40 && avg <= 49;
});
console.log('\nالمتعثرون للرأفة:', needSupport.map(s => s.name));


const afterSupport = needSupport.map(s => {
  const newGrades = s.grades.map(g => g + 5);
  return new Student(s.name, s.id, newGrades, s.attendance);
});


const totalNewAvgs = afterSupport.reduce((acc, s) => acc + s.getAverage(), 0);

console.log('\nبعد الرأفة:');
afterSupport.forEach(s => {
  console.log(`${s.name} | متوسط جديد: ${s.getAverage().toFixed(2)} | نتيجة: ${s.getResult()}`);
});

let overallAverage;
if (afterSupport.length === 0) {
  overallAverage = 0; 
  console.log('لا يوجد متعثرون - درع حماية');
} else {
  overallAverage = totalNewAvgs / afterSupport.length;
}
console.log(`\nالمتوسط العام للمتعثرين بعد الرأفة: ${overallAverage.toFixed(2)}`);