const user = {
    username: "Shivanshi",
    price: 150,
    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website`)

        console.log(this);
        
    }
}
// user.welcomeMessage()
//  user.username = "pradeep"
//  user.welcomeMessage()
//console.log(this);

// function chai(){
//     let username = "shivanshi"

//     console.log(this.username);
    
// }
// chai()


// const chai = function(){
//     let username = "shivanshi"
//     console.log(this.username);

// }
// chai()

//arrow 

const chai = () =>{
    let username = "shivanshi"
    console.log(this);

}
//chai()

//basic arrow function

// const addTwo=(num1 , num2)=>{
//     return num1 + num2

// }
// console.log(addTwo(3, 4));

//const addTwo=(num1 , num2)=> num1 + num2

// const addTwo=(num1 , num2)=> (num1 + num2)

const addTwo=(num1 , num2)=> ({username: "shivanshi"})

console.log(addTwo(3, 4));

const myArray = [2,5,3,7,8]
// myArray.forEach()




