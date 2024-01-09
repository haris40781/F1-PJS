console.log("hello world");

let myData = {
    "name" : "smith",
    "num":56,
    "city" :"peshawar",
    "grade" : "C"
}
// TWO METHODS TO GET THE VALUW OF AN OBJECT


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
let A = 55;
letB = 65;

console.log("the sum a+b is :", a+b);
console.log("the sum a-b is: " , a-b);
console.log("the sum a*b is : " , a*b);
console.log("the sum a%b is : " , a%b);

