  /*let score=33

//console.log(typeof score);//number
//console.log(typeof(score));//number

let score1="33"

//console.log(typeof score1);//string

let valueInNumber=Number(score1)

console.log(typeof valueInNumber);//number


let score2="33abc"
let valueInNumber1=Number(score2)

console.log(typeof valueInNumber1);//number ??? 33abc
console.log(valueInNumber1)//NaN => NOT A NUMBER, special type



let score3=null

console.log(typeof score3);//object
let valueInNumber4=Number(score3)
console.log(typeof valueInNumber4);// number
console.log(valueInNumber4)// 0

let score4=undefined

console.log(typeof score4);//undefined
let valueInNumber5=Number(score4)
console.log(typeof valueInNumber5);// number
console.log(valueInNumber5)// NaN


let score5=true

console.log(typeof score5);//boolean
let valueInNumber6=Number(score5)
console.log(typeof valueInNumber6);// number
console.log(valueInNumber6)// 1

let isLoggedIn = 1
let booleanIsLoggedIn= Boolean(isLoggedIn)
console.log(typeof(booleanIsLoggedIn));//boolean
console.log(booleanIsLoggedIn);// true



let isLoggedIn = ""
let booleanIsLoggedIn= Boolean(isLoggedIn)
console.log(typeof(booleanIsLoggedIn));//boolean
console.log(booleanIsLoggedIn);// false

// anything other than 0 and empty string gives true 

let someNumber=33
let stringNumber=String(someNumber)
console.log(typeof(stringNumber))//string
console.log(stringNumber);//33 */


// ********** Operations ************************************

let value=3
let negValue=-value
console.log( negValue); 
console.log( typeof negValue);

console.log(); 
// ** => power
// % => remainder

let str1="hello"
let str2= " ipsita"
let str3=str1+str2
console.log(str3); // hello ipsita 

console.log("1"+2);//12


console.log(1+"2");//12 => string

console.log(typeof ("1"+2)); //string


console.log("1"+2+2);//122
console.log(typeof ("1"+2+2)); //string

console.log(1+2+"2"); //32=>string

//"1"+2+2=122
//1+2+"2"=32

console.log(1+"2"+2);//122

console.log(+true);//1
//console.log(true+);//error

console.log(+"");//0

let num1,num2,num3
num1=num2=num3=2+2 // shouldnt do this

let gameCounter=100
gameCounter++
console.log(gameCounter);//101


++gameCounter //prefix value changed then incremented postfix value changed then used 
console.log(gameCounter);//101



