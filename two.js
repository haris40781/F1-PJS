console.log("hello world");

let myData = {
    "name" : "smith",
    "num":56,
    "city" :"peshawar",
    "grade" : "C"
}
// TWO METHODS TO GET THE VALUE OF AN OBJECT


// second method
console.log(myData.name)
console.log(myData.num)

// FIRST method
console.log(myData["grade"])

// method of loop for print all object
for(let i in myData){
    console.log(i , myData[i]);
}

// ARTHMATIC  OPPERATORS
let a = 3;
let b = 2;

console.log("the sum of a+b is : " , a+b);
console.log("the sub of a-b is : " , a-b);
console.log("the mul of a*b is : " , a*b);
console.log("the modulus of a%b is : " , a%b);
console.log("the div of a/b is : " , a/b);


