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

averageStudentMark(students); 
averageGroupMark(students);

function averageStudentMark(students) {
    let averageMark;
    for (let i = 0; i < students.length; i++) 
    {
        averageMark = avgMarks(students[i].marks);
        console.log(`${students[i].name} has an average mark of ${averageMark}.`);
    }
    return averageMark;
}


function averageGroupMark(students) {
    let allMarks;
    allMarks = students.flatMap(function(student) {
        return student.marks
    });

    const averageMark = avgMarks(allMarks);
    console.log(`Average mark of group is ${averageMark}.`);
}

function avgMarks(allMarks){
    let result;
    result = allMarks.reduce(function(sum, mark) { 
        return sum + mark
    }) / allMarks.length;
    return result;
}
