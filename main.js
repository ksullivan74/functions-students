//In this exercise, you will define four functions. One will create a student object, 
//and the other three will add a grade for a subject to the student object.

//createStudent() should return a new student object.
//The name of the student, and which grade the student is in, must be passed to the function as arguments.
//The returned object should have a name property and a grade property.

const createStudent = (name,grade) => 
{
    const studentObject = {name,grade}
    return studentObject
}

//addMathGrade() should add a new "math" property to the student with a value of "B".
const addMathGrade = (mathGradeObject) => 
{
    mathGradeObject.mathGrade = "B"
    return mathGradeObject
}
//addHistoryGrade() should add a new "history" property to the student with a value of "C".
const addHistoryGrade = (historyGradeObject) => 
{
    historyGradeObject.history = "C"
    return historyGradeObject
}

//addScienceGrade() should add a new "science" property to the student with a value of "A".
const addScienceGrade = (scienceGradeObject) => 
{
    scienceGradeObject.science = "A"
    return scienceGradeObject
}

let student1 = createStudent("Neil",10)
//console.log(student1)
let studentAddMathGrade = addMathGrade(student1)
//console.log(studentAddMathGrade)
let studentAddHistoryGrade = addHistoryGrade(studentAddMathGrade)
let studentAddScienceGrade = addScienceGrade(studentAddHistoryGrade)
console.log(studentAddScienceGrade)