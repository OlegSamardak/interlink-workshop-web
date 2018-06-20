var studentForm;



function init() {
    loadStudents().then(renderStudents);
}

const url = "http://localhost:3000/students";

window.onload = init;

function renderStudents(students) {
    let studentTemplate = document.getElementById('student-element-template');
    let templateContent = studentTemplate.content.querySelector('.student-element');
    let studentsList = document.getElementById('students-list');
    studentsList.innerHTML = '';
    for (let student of students){
        let templateClone = templateContent.cloneNode(true);
        templateClone.querySelector('h1').innerText = student.name;
        templateClone.querySelector('p').innerText = student.score;
        studentsList.appendChild(templateClone);
    }

}

function loadStudents() {
    return fetch(url).then(r => r.json())
}