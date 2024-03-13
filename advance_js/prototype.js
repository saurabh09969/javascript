let myHeros = ["thor","spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}
Object.prototype.Saurabh = function(){
    console.log(`Saurabh is present in all objects`);
}
// heroPower.Saurabh();
Array.prototype.heySaurabh = function(){
     console.log(`Saurabh says hello`);
 }
 myHeros.heySaurabh();
 //heroPower.heySaurabh() // won't run cause heroPower is an obj i.e lower in hierarchy


 //Inheritance 

 const user ={
    name: "chai",
    email: "chai@google.com"
 }
 const Teacher = {
    makeVideo: true
 }
 const TeachingSupport = {
    isAvaliable: false
 }
 const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport //giving refrence of teachingsupport to proto
 }

 Teacher.__proto__ = user; //Teacher can access properties of user

 //Modern Syntax
 Object.setPrototypeOf(TeachingSupport, Teacher) //(whom want to access, of whose )

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()

