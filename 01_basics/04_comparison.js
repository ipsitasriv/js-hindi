console.log(2>1)//true
// == equal
//!= not equal

// console.log("2">1);//true auto conversion
// console.log("02">1)//true 

console.log(null>0)//false
console.log(null==0)//false
console.log(null>=0)//true converts null into 0
// the reason is that an equality check == and comparison >< >= <= work differently
//comparisons convert null to a number treating it as 0
//thsts why (3)null >=0 is true and (1) null >0 is false


console.log(undefined>0)//false  //avoid such conversions
console.log(undefined==0)//false
console.log(undefined>=0)//false

// === strict check : strictly checks value and datatype


console.log("2"===2)//false, different data type
