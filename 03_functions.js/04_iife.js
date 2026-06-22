(function chai(){//named iife
    console.log("db connected")
})();//iife()()  always need to end with semicolon

(()=>{
    console.log(`db conneccted two`)
})();

((name)=>{
    console.log(`db conneccted two ${name}`)
})('hitesh');//parameter passed 