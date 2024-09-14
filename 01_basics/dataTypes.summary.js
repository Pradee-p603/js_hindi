// # primitive data types   
// it can be call by value
// 7 types : string, Number, Boolean, null, undefined, Symbol, BigInt

//can javaScript be statically typed or dynamically?
//ans = avaScript is dynamically typed. 
//This means Variables can hold any type of value and can change types at runtime without any type declaration
//example
const score = 100;
const scoreValue = 100.5

const isLoggedIn = true
const outsideTemp = null

let userEmail; 

//symbol

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId )

const bigNumber = 2381282212121486n







// # refrence data types(non primitive)
// arrays, objects, Function

const heros = ["shaktimaan", "Nagraj", "doga"] // array

let myObject = {
name: "pradeep",
age: 22


}
//function

const myFunction = function(){
    console.log("hello world")
}

console.log(typeof myFunction);

//**************************************************************************************88 */

// stack memory or heap memory

//stack use in primitiveTypes
//heap use in non primitive types

let myYoutubeName = "pradeep"

let anotherName = myYoutubeName

anotherName = "verma"

console.log(myYoutubeName)
console.log(anotherName)
//heap
let user1 ={
    email: "user@gmail.com",
    upi: "user@ybl"
}
 
let user2 = user1
user2.email = "pradeep@gmail.com"
console.log(user1.email)
