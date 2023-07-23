const student = {
    name: 'Bruce',
    surname: 'Lee',
    grades: [4, 5, 3]
};

function calculateAverageGrade(obj){
    const{grades: [firsGrade, pastGrade, threeGrade]} = student;
let averageGrade = (firsGrade + pastGrade + threeGrade) / obj.grades.length;
return averageGrade;
}

console.log(calculateAverageGrade(student));