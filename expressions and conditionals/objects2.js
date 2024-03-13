// //singleton
// const tinderuser ={}
// tinderuser.id = "123"
// tinderuser.name = 'sdh'
// tinderuser.isLoggedIn = false

// const regularUser = {
//     email: "xyz@gmail.com",
//     fullname: {
//         userFullName: {
//             firstname: "saurabh",
//             lastname: "Rautela"
        
//     }
// }
// }
// // console.log(regularUser)
// // console.log(regularUser.fullname.userFullName.firstname)

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "c", 4: "d"}
// const obj3 = {5: "e", 6: "f"}

// // const obj4 = {obj1,obj2}

// // const obj4 = Object.assign({},obj1,obj2);
// const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4)

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

// console.log(Object.hasOwnProperty('isloggedin'))

// console.log(Object.entries(regularUser))


//obj restructuring
const course = {
    coursename: "JavaScript ",
    fee: "2000",
    courseInstructur: "Saurabh"
}

const{courseInstructur : instructur} = course
console.log(instructur)