const name = "saurabh"
const age = 21;

//old syntax
//console.log(name + age);

//string interpolation(new syntax)
console.log(`hello my name is ${name} and age is ${age}`)

const gameName = new String('valorant')
console.log(gameName[0]);
console.log(gameName.__proto__)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('r'))

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "  saurabh  ";
console.groupCollapsed(newStringOne.trim()); //Removes starting and endspace

const url = "https://javaScript.com/javaScript%20abc";
console.log(url.replace('%20','--'));

console.log(url.includes('java'));
