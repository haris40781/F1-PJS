// let hereos = [ "spider man " , "super man" , "bat man" , "hulk"];
// console.log(hereos);
// console.log(hereos[1]);

// //  METHOD OF AN ARRAY
// // LAST ME REMOVE KRNA K LIE
// console.log(hereos.push("acha man"));
// console.log(hereos);

// // LAST ME ADD KARNA  K LIE
// console.log(hereos.pop());
// console.log(hereos);

// // REMOVE FIRST ELEMENT
// console.log(hereos.shift());
// console.log(hereos);

// //  ADD ELEMENT ON FIRST
// console.log(hereos.unshift("why man"));
// console.log(hereos);

// //  JHAN TK ELEMNT CHAHIYE HON UNKI PEHLI WALI OR LAST KA JO ELEMNENT HOGA US K BAD WALA TARGET KARAINGY FOR REMOVEL 
// //  SLICE 
// console.log(hereos.slice(1,2));

// //  SPLICE
// console.log(hereos.splice(1,1, "apple" , "mango" , "banana" ));
// console.log(hereos);


//  FOR MERGE 2 OR MORE ARRAY
let bbq = ["tikka" , "bihari boti" , "chapli kabab"];
let seefood = ["fish" , "prawns"  , "lobsters"];
let sweetfood = ["icecream" , "gulab jamun" , "halwa"];

let menu = bbq.concat(seefood , sweetfood);
console.log(menu);

for (let m in bbq){
    console.log(bbq[m]);
}
for (let n in seefood){
    console.log(seefood[n]);
}
for (let w in sweetfood){
    console.log(sweetfood[w]);
}