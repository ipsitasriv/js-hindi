//singleton if we use construtors we get singleton
const mySym =Symbol("key1")

const JsUser={

    name:"Hitesh",
    'last name':"srivastava",
    [mySym] :"mykey1",// to represent a symbol
    age:18,
    location:"jaipur",
    email:"histesh@gmail.com"
    }

console.log(JsUser.email)
console.log(JsUser['email'])//if we have a string as key then we cant use dot
console.log(JsUser["last name"])
console.log(JsUser[mySym])//to obtain a symbol


//we can simply overwrite using =
//Object.freeze(JsUser)// wont be able to make changes to the obhject anymore


JsUser.greeting=function(){
    console.log("Hello JS user")
}
console.log(JsUser.greeting())

JsUser.greetingtwo=function(){
    console.log(`Hello JS user, ${this.name} `)//string interpolation
}
console.log(JsUser.greetingtwo())