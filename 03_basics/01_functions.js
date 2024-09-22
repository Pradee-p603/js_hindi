
function sayMyName() {
    console.log("P");
    console.log("R");
    console.log("A");
    console.log("D");
    console.log("E");
    console.log("E");
    console.log("P");


}

//sayMyName()

// function addTwoNumbers(number1 , number2){ //parameters
//     console.log(number1+number2);

// }

// function addTwoNumbers(number1, number2) { //parameters

//     // let result = number1 + number2
//     // return result;
//     return number1 + number2;

// }

// addTwoNumbers(1, 1) //arguments
// const result = addTwoNumbers(1, 1)
// console.log("Result:",result);

function loginUserMessage(username) {
    if (!username) {
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("pradeep"));
//console.log(loginUserMessage());

function calculateCartPrice(...num1 ){ // ...rest operator
return num1
}
//console.log(calculateCartPrice(200,300, 400))

const user ={
    username:"pradeep",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)

}
//handleObject(user)

handleObject({
    username:"lokendra",
    price:200
})

const myArray = [200,400,600,800]
function returnSecondValue(getArray){

    return getArray[1]

}
//console.log(returnSecondValue(myArray))

console.log(returnSecondValue([200.400,600,800]));
