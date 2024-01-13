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

let a = 60;
let b = 56;

console.log("the sum of a+b is : " , a+b);
console.log("the sub of a-b is : " , a-b);
console.log("the mul of a*b is : " , a*b);
console.log("the modulus of a%b is : " , a%b);
console.log("the div of a/b is : " , a/b);

// Logical operators

// or || ek cond bhi true hoge to apka output true hojayega
//  And &&
//  NOT !

//  OR
console.log("OR GATE");
console.log(true || true);
console.log(true || false);
console.log(true || false);
console.log(true || false);

//  AND !
console.log("AND GATE");
console.log(true && true);
console.log(false && true);
console.log(true && false);
console.log(true && true);


//  INCREEMENT
let w = 20;
console.log(w)
// PRE INCXREMENT add hoga then print hoga

console.log(++w)     // 21

//  post increment print hoga then add hoga

console.log(w++) // 21 +1 
console.log(w)  //22

w += 10 // w = w + 10 22 + 10 
console.log(w)



let age = 20
if(age>= 20){
    console.log("you can cast your vote")
}

if(age>= 20){
    console.log("you can not cast your vote")
}

let mode = prompt('Enter your mode')
1)DARK
2)LIGHT

if(mode === "DARK"){
    color = "black";
}
if(mode === "LIGHT"){
    color = "white"
}


console.log(COLOR);