/* on the basis of storage in memory and how we access them 
types of data :
primitive and non primitive(reference type)
primitive : 7 types(call by value)
string
number
boolean
null
undefined
bigint
symbol

# no concept of decimal
#javascript is a dynamically typed language

*/
// const id= Symbol("123")
// const anotherid=Symbol("123")

// console.log(id===anotherid)//not same

// const bigNumber=3456789098765n//bigint ends with n 

// // reference type or non primitive :
// // array
// // objects
// // functions

// const heros=["shaktiman",naargraj,"doga"]
// let myObj={
//     name:"ipsita",
//     age: 21,
// }


// const myFunction= function(){
//     console.log("hello world")
// }

// console.log(typeof bigNumberNumber)//undefined
// console.log(typeof myFunction)//function

// array and objects return type is function but of fucntion is object function



//************************************** */

//stack (primitive),heap(non primitive)

let myYoutubename="ipsitasworkplace"

let anothername=myYoutubename
anothername="heresus"

console.log(myYoutubename)//changes are not made to real copy but to only copy
console.log(anothername)
console.log(myYoutubename)

let userone={
    email: "user@google.com",
    upi: "user@ybl"

}
let usertwo= userone//points to same memory in the heap
usertwo.email="ipsita@google.com"//this way we can access any 

console.log(userone.email)
console.log(usertwo.email)


