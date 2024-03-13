class User{
    constructor(username){
        this.username = username
    }
    //give value of username setted
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,passowrd){
        // The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.
        super(username)
        this.email = email;
        this.passowrd = passowrd;
    }

    addCourse(){
        console.log(`New course was added by ${this.username}`);
    }
}
const  chai = new Teacher("chai","chai@email.com","123");

chai.addCourse()
chai.logMe()

const masalaChai = new User("masalaChai")
masalaChai.logMe()

console.log(masalaChai instanceof User);

