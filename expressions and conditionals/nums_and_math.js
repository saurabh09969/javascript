const balance = new Number(100)
console.log(balance);

//to set after decimal
console.log(balance.toString().length)
console.log(balance.toFixed(2))

const Number1 = 123.8996
console.log(Number1.toPrecision(3));

//to write in indian standard or other standards
const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'))
 

//+++++++++++++++   Math    ++++++++++++++++++++++++++

// console.log(Math)
// console.log(Math.abs(-2))       //return +ve of -ve value
// console.log(Math.round(4.4)) 
// console.log(Math.ceil(3.4))
console.log(Math.floor(3.4))
// console.log(Math.min(4,5,6,2,1))
// 
console.log(Math.random())
console.log((Math.random()*10) + 1)
console.log(Math.floor(Math.random()*10) +1 )

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min +1)) + min)
 

