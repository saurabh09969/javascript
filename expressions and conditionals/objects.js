//object literals

const mySym = Symbol("key1")
const JsUser = {
    name : "Saurabh",
    "fullname": "Saurabh Rautela",
    [mySym]:"mykey1"    ,       
    age : 21,
    location : "Dehradun",
    email: "saurabhrautela066@gmail.com",
    isLoggedin: false,
}
// console.log(JsUser.email);
//or
// console.log(JsUser["email"])
console.log(JsUser["fullname"]);
console.log(JsUser.fullname);
// console.log(JsUser.mySym);
// console.log(typeof JsUser[mySym]); 
// Object.freeze(JsUser) //now can't change anything in object
// console.log(JsUser)


JsUser.greeting = function(){
    console.log("hello user");
}
console.log(JsUser.greeting());


JsUser.greetingtwo = function(){
    console.log(`hello user, ${this.location}`);
}
console.log(JsUser.greetingtwo());

