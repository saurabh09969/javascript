// const user = {
    // username: "hitesh",
    // price: 2000,
    // 
    // welcomeMessage: function(){
        // console.log(`${this.username} , welcome to website`);
        // console.log(this);
    // }
// }
// user.welcomeMessage();
// user.username = "Saurabh";
// user.welcomeMessage();

// console.log(this)


//const addtwo = (num1,num2) => (num1 + num2); //implicit return

//or

// const addtwo = (num1,num2) => {
    // return num1+num2;
// }

// const addtwo = (num1,num2) => ({username: "Sg"}) //reutrning and object must kept in {}
// console.log(addtwo(1,2))


//++++++++++++++++++++++ Immediately invoked function Expressions (IIFE) ++++++++++++++++++++++++++++//
//use to romve global scope pollution

// (() {}) ();  //syntax

(function chai() {
    //named IIFE
    console.log('DB connected');
}) ();


(() =>{
    console.log('abc');
} )();


((name) => {
    console.log(`name is ${name}`);
})('daur')
