//var c = 300
let a = 300
//global scope
if (true) {
    //block scope 
    let a = 10
    const b = 20
    var c = 30
    // console.log("INNER: ", a);


}

//console.log(a);
//console.log(b);
//console.log(c);

function one() {
    const username = "shivanshi"

    function two() {
        const website = "instagram" //child function can access the parent function only

        console.log(username)

    }
    //  console.log(website)

    //two()
}
//one()
if (true) {
    const username = "shivanshi"
    if (username === "shivanshi") {
        const website = " dubey"
       // console.log(username + website)
    }
    //console.log(website)
}
//console.log(username);

//++++++++++++++++++++++ intresting ++++++++++++++++++

console.log(addone(5));
//no error
function addone(num){
   return num +1
}

//hoisting
//error
console(addTwo(5))
const addTwo = function(num){
    return num +2
}
// addTwo(5)
