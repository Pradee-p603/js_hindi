const marvel_heros =["thor", "ironman", "spiderman"]
const dc_heros =["superman", "flash", "batman"]

//marvel_heros.push(dc_heros) // it does not merge but one array contains another

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros) // return a new array and merge both array
// console.log(allHeros);

// const all_new_heros = [...marvel_heros, ...dc_heros]//spread techniqe work same as concate method
// console.log(all_new_heros);

// const another_array = [1,2,3,[4,5,6], 7,[6,7,[4,5]]]

// const real_another_array = another_array.flat(Infinity) //Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

// console.log(real_another_array)

console.log(Array.isArray("shivanshi")) // check the given argument is correct or not

console.log(Array.from("shivanshi")) // convert the argument into array

console.log(Array.from({name: "shivanshi"})) //intresting


let score1 =100
let score2 =300
let score3 =400
console.log(Array.of(score1,score2,score3))// return the set of elements as new aray