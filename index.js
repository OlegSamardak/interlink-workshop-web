var studentForm;

var STUDENTS = [
    {
        name : "Oleh",
        score : 10
    },
    {
        name : "Vitaliy",
        score : 100
    }
];

function init() {
    renderStudents(STUDENTS);
}

window.onload = init;

function renderStudents(students) {
    let studentTemplate = document.getElementById('student-element-template');
    let templateContent = studentTemplate.content.querySelector('.student-element');
    let studentsList = document.getElementById('students-list');
    studentsList.innerHTML = '';
    for (let student of students){
        let cloneTemplate = templateContent.cloneNode(true);
        cloneTemplate.querySelector('h1').innerText = student.name;
        cloneTemplate.querySelector('p').innerText = student.score;
        studentsList.appendChild(cloneTemplate);
    }

}