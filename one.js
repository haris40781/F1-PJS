let userName = prompt("Enter Your Name");
console.log(userName);
let Physics =parseInt( prompt("Enter Your Physics No"));
let Chemistry =parseInt( prompt("Enter Your Chemistry No"));
let Math =parseInt( prompt("Enter Your Math No"));
let Urdu =parseInt( prompt("Enter Your Urdu No"));
let English =parseInt( prompt("Enter Your English No"));


let obtainedMarks = Math + Physics + Chemistry + Urdu + English ;
console.log(obtainedMarks);


let per = obtainedMarks/500*100
console.log(per);
if (per>=910 && per<=100){
    console.log("Your grade is A+1");
}
else if(per >=80 && per<=90){
    console.log("Your grade is A+");
}


else if(per >=700 && per<=80){
    console.log("Your grade is A");
}

else if(per >=60 && per<=70){
    console.log("Your grade is B");
}

