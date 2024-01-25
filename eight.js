
let str = "once upon a time";
console.log(str);
console.log(str.length);
console.log(str.includes("O"));
console.log(str.endsWith("E"));
console.log(str.replace("upon","Apple"));
console.log(str.toLocaleLowerCase());
console.log(str[5]);

//  STRINGS ARE IMMUTABLE
let word = "HELLO";
console.log(word);
word[0] = "M";
console.log(word);