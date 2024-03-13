"use strict"; //treasts all JS code as newer version
let name = "Saurabh";
let age = 18;
let isLoggedIn = false;


//permitive datatypes

//number => 2 to power 53
//bigint
//string => ""
//boolean => true/false
//null => standalone value
//undefined
//symbol => unique

console.log(typeof null); //type is object of null
console.log(typeof undefined);

const id = Symbol('123');
const id2  = Symbol('123')

console.log(id === id2);

//bigInt
const bigNumber = 345387626332542n;

//objects
let Myobj = {
    name : "Saurabh",
    age: 22,
}
console.log(Myobj);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//permitive (stack)    Non-permitive (heap)
let youtubename = "chaiOrCode"
let channelname = youtubename;
channelname = "singh"


console.log(youtubename)
console.log(channelname)


 

