//IIFE stands for immediate invoked function expression
// with the help of ({})()

(function chai(){
    //named iife
    console.log(`DB CONECTED`);
    
})(); 
//; used to end iife

//arrow function iifi
((name)=>{
    console.log(`DB CONNECTED ${name}`);
    
})('shivii')