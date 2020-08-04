const students = [
    {
        name: 'John Smith',
        marks: [10, 8, 6, 9, 8, 7 ],
    },
    {
        name: 'John Doe',
        marks: [ 9, 8, 7, 6, 7 ],
    },
    {
        name: 'Thomas Anderson',
        marks: [6, 7, 10, 8 ],
    },
    {
        name: 'Jean-Baptiste Emanuel Zorg',
        marks: [10, 9, 8, 9 ],
    },
];

averageStudentMark(students[0]); // 0 1 2 3
averageGroupMark(students);

function averageStudentMark(student) {
    let averageMark = avgMarks(student.marks);
    console.log(`${student.name} has an average mark of ${averageMark}.`);
    return averageMark;
}


function averageGroupMark(students) {
    let averageMark;
    let allMarks = students.flatMap(function(student) {
        return student.marks
    });
    console.log(`All average marks of students:`)
    for (let i = 0; i < students.length; i++) 
    {
        averageMark = avgMarks(students[i].marks);
        console.log(`${students[i].name} has an average mark of ${averageMark}.`);
    }
    averageMark = avgMarks(allMarks);
    console.log(`Average mark of group is ${averageMark}.`);
}

function avgMarks(allMarks){
    if (allMarks.length === 0) {
        return 0;
    }
    let totalMarks = allMarks.reduce(function(sum, mark) {
        return sum + mark
    });
    return totalMarks/allMarks.length;
}
