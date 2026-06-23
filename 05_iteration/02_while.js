// // while(index<=10){

// // }
// //for of

// //arr=[{},{},{}]

// // arr=[1,2,3,4,5]
// // for (const i of arr) {
// //     console.log(i);
    
    
// // }

// // const greetings='hellow world'

// // for(const i of greetings){
// //     console.log(i);//h/n e/n l /n l/n
    
// // }

// //maps

// const map=new Map
// map.set("india", 91)
// map.set("india", 91)//hold unique values
// //maintain insertion order
// //can be looped
// console.log(map)//Map(1) { 'india' => 91 }

// for(const [key,value] of map){
//     console.log(key ,value);//de sturcutring

    
// }

// const myOBj={
//     "game1":"nfs",
//     "game2":"spiderman"
// }
// for(const [key,value]of myOBj){
//     console.log(key,value);
    
//     //objects not iterable
// }

// const myObject={
//     js:"javascript",
//     cpp:"c++",
//     rb:"ruby",
//     swift:"swift by apple"
// }

// for (const key in myObject) {
//     console.log(key)
    
// }
// for (const key in myObject) {
//     console.log(myObject[key])
    
// // }
// const prog=["js","rb","py",'java','cpp']

// for(const key in prog){
//     console.log(key);}
    

//for an arrya for in loops print keyspr index values
// //on maps for in loop returns notghing as it is not iterable


// prog.forEach(function(item){
//     console.log(item);}
//                        //call back fucntion
// //prog.foreach(function_name())

// prog.forEach(item,index.arr)=>{
//     console.log(item,index,arr);
    
// }

// const myCoding=[{
//     languageName:"javascript",
//     languageFileName:"js"}
//     ,{

//     },{},{}]


//     const values=myCoding.forEach((item)=>{
//         console.log(item.languageFileName);
//     })//doesnt return value


// const mynums=[1,2,3,4,5,6,7,8,9,10]

// // const x=mynums.filter((num)=>num>5)
// // console.log(x)//[ 6, 7, 8, 9, 10 ]

// const x=mynums.filter((x)=>{
//     x>4
// })
// console.log(x)//[  ]

// const x=mynums.filter((x)=>{
//     return x>4
// })
// console.log(x)//must add return with paranthesis

// const userBooks=books.filter((book)=>book.title===)

myNumers=[1,2,3,4,5,6,7,8,9,10]
const newNums=myNumers
        .map((num=>num*10))
        .map((num=>num+1))
        .filter((num)=>num>=40)

//         console.log(myNumers);//[
//   1, 2, 3, 4,  5,
//   6, 7, 8, 9, 10
// ]

const myNums=[1,2,3]
const sumwithinitial=myNums.reduce((acc,item)=>)