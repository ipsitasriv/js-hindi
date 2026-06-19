const user={
    username:"ipsita",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this)//important
    }

}
// user.welcomeMessage()
// user.username='sam'
// user.welcomeMessage()
//console.log(this);//returns empty but in inspect mode it returns windows


// function chai(){
//     let username ="ipsita"
//     console.log(this.username)//returns undefined within functions
// }
// chai()



//  const chai=function() {
//     let username ="ipsita"
//     console.log(this.username);//returns undefined
//     console.log(this)//returns context
//  }
//  chai()

// const chai= ()=> {
//     let username ="ipsita"
//     console.log(this.username);//returns undefined
//    console.log(this)//returns empty
// }
// chai()

const addtwo=(num1,num2) => {

    return num1+num2
}

console.log(addtwo(3,4))



const addtwo=(num1,num2) =>  (num1+num2)//implicit return automatically returns

//to return object

const addtwo=()=>({username:"ipsita"})

// const myArray=[2,3,4,5,6]

// myArray.forEach(()=>())