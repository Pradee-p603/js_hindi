//sngleton
//Object.create



//objects literals

const mySym = Symbol("key1")

const jsUser ={
    name:"shivanshi",
    "full name":"shivanshi Dubey",

    [mySym]: "myKey1",
    age: 24,
    location: "satna",
    email: "shivanshi240@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "satuarday"]
}

console.log(jsUser.name)
console.log(jsUser["email"])
console.log(jsUser["full name"])
console.log(jsUser[mySym])

jsUser.email = "pradeep@gmail.com" // chnage value in object

console.log(jsUser.email);

//Object.freeze(jsUser) // freez the object which we cannot change 

jsUser.email = "shivanshi240@gmai.com"
console.log(jsUser)


//function

jsUser.greeting = function(){
    console.log("hello js user")
}

jsUser.greeting2 = function(){
    console.log(`hello js user ,${this.name}`)
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());

