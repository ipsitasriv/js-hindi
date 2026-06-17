//const tinderUser= new Object()//singleton object
const tinderUser={}//non singleton object
tinderUser.id='123abc'
tinderUser.name="samantha"
tinderUser.isLoggedIn=false
//console.log(tinderUser)

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"hitesh",
            lastname:"choudhary"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname)

const obj1={
    1:"a",
    2:"b"
}

const obj2={
    3:"c",
    4:"d"
}

//const obj3={obj1,obj2}
const obj3=Object.assign({}, obj1,obj2)

const obj3={...obj1,...obj2}
console.log(obj3)

const users=[
    {},{},{}
]//array of objects


users[1].email

Object.keys(tinderUser)//returns array of keys
Object.values(tinderUser)//returns array of values

Object.entries(tinderUser)//returns array of key value pairs

tinderUser.hasOwnProperty("isLogged")//returns true or false


const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"

}

const {courseInstructor:instructor}=course  //gives tag to value

const navbar= ({company}) =>{

}
navbar(company= "hitesh")//destructuring

//{
//    "name":"hitesh",
//    "coursename" :"js in hindi",
 //   price :"free"
}//json


[{},
{},
 
]

