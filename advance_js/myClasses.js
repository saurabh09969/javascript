// class User{
    // constructor(username,email,password){
        // this.username = username;
        // this.email = email;
        // this.password = password;
    // }
    // encryptPassowrd(){
        // return `${this.password}#1dg23`

    // }
    // changeUsername(){
        // return `${this.username.toUpperCase()}`
    // }
// 
// }
//  const chai = new User("chai","chai@gmail.com","1234");
// 
// console.log(chai.encryptPassowrd());
// console.log(chai.changeUsername());

//behind the scene

function User(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
User.prototype.encryptPassowrd = function(){
    return `${this.password}123`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}
const tea = new User("tea","tea@gmail.com","123");
console.log(tea.encryptPassowrd())
console.log(tea.changeUsername())