// const myaArr = [0,1,2,3,4]
// console.log(myaArr)
// myaArr.push(6);
// console.log(myaArr)

// myaArr.unshift(9) //insert element at begning pos 
// console.log(myaArr)

// myaArr.shift();
// console.log(myaArr)

// const newArr = myaArr.join() //add all elemnts of arr to string
// console.log(newArr);

// const myn1 = myaArr.slice(1,3)
// console.log(myn1);
// console.log("A",myaArr);

// const myn2 = myaArr.splice(1,3)
// console.log(myn2)
// console.log("B",myaArr);


const marval_heros = ["ironman","Hulk","Thor"];
const Dc_heros = ["flash","superman","Batman"];

const all_heros = [...marval_heros, ...Dc_heros]; //... called spread
console.log(all_heros);


const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.from("SAURABH"))

console.log(Array.from({name: "Saurabh"})) // return empty array

let score1 =100
let score2 = 200;
let score3 = 300

console.log(Array.of(score1,score2,score3))


 

