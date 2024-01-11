console.log("student");

let student = {
    name : "mike",
    age :25,
 class : "nine",
    num: 24358
};

// FIRST METHOD TO GETTING A VALUE OF AN OBJECT
console.log(student["class"]);
// SECOND METHOD TO GETTING A VALUE OF AN OBJECT
console.log(student.name);
console.log(student.age);

for (let i in student){
    console.log(i , student[i])
}