// var c=300
// if (true)
// {
// //let a= 10
// //const b=20
// var c=30

// }

//  console.log(c)//var works outside its scope

function one(){
    const username='hitesh'
    function two(){
        const website="youtube"
        console.log("username")
    }
    console.log(website)

    two()
}

one()


addone(5)// function can be called before defintion 
function addone(num){
return num+1
}

addone(5)

addTwo(2)//cant be called before def 
const addTwo=function(num){
    return num+2
}//expression

addTwo(2)



