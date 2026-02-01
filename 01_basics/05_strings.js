const name="ipsita"
const repocount=50

console.log(name+repocount+"value")//ipsita50value

console.log(`hello my name is ${name} and my repo count is ${repocount}`)//better way

const gamename=new String("ipsi-ta") 
//String("ipsita") 
/*  0:"i"
1:"p"
2:"s"
3:"i"
4:"t"
5:"a"
length:6
[[Prototype]]:String
[[PrimitiveValue]]:"ipsita" */

//string behaves like an object

// console.log(gamename[0])//return i
// console.log(gamename.__proto__)//double underscore // returns an object of string
console.log(gamename.length)
// console.log(gamename.toUpperCase())//doesnt change original value 
// console.log(gamename.charAt(3))//i//pass the index
// console.log(gamename.indexOf("t"))//4


const newString=gamename.substring(0,4)//same as python last one excluded
//doesnt take negative value if provided starts from 0
// console.log(newString)

const anotherString=gamename.slice(-7,-4)//takes negative value too
console.log(anotherString)
 
const newStringOne="   ipsita   "
console.log(newStringOne)
console.log(newStringOne.trim())//removes empty spaces from both sides removes end character as well


const url="https:/   /ipsita%20.com/ips  ita%20"

console.log(url.replace("%20","-"))//replaces the first ocurence
console.log(url.includes("Ipsita"))//returns true but case sensitive 

console.log(url.split(" "));
