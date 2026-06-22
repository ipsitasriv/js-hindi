// const userEmail='hitesh.ai'
// //only empty string and 0 ,-0,Bigint(0n),null,undefined,NaN are considered false

// //truthy value :
// "0","false"," ",[],{},function(){}

// if(userEmail.length===0){
//     console.log("Array is empty");
// }

// const empthyObj={}
// if(Object.keys(empthyObj.lenth===0)){
//     console.log("Object is empty");
    
// }

//false==0=>true
//false==''=>true
//0=''=>true
//Nulish coalescing Operator(??) : null undefined

// let val1
// val1=5??10//5
// val1=null??10//10
// console.log(val1);

// let var1=undefined??15//15
// console.log(var1);

// val1=null??10??15//10
// console.log(val1);


//ternary operator


//condition ? true : false 
let iceTEaPrice =100;//end of line character
(iceTEaPrice >= 80) ?console.log("less than 80") : console.log("more than 80");