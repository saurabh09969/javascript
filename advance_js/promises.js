const promisOne = new Promise(function(resolve,reject){
//Do an sync task
// DB Calls, crypto, network

//promise one
    setTimeout(function(){
        console.log('Async Task is complete');
        resolve();
    },1000)
})

promisOne.then(function(){
    console.log("promise consumed");
})

//promomise three
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"user1", email:"user1@gmail.com" })
    },1000)
})
promiseThree.then(function(user1){
    console.log(user1);
})

//handling error
//promise four

const promisefour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        //let error = false;

        if(!error){
            resolve({username: "saurabh", password: "123"});
        }
        else{
            reject("ERROR: Something went wrong")
        }
    },1000)
})
promisefour.then((user) =>{
     console.log(user);
     return user.username;
    })
    .then((username) =>{
        console.log(username);
    })
    .catch((error) => {
        console.log(error);
    }).finally(() =>{
        console.log("The promise is either resolved or rejected")
    })

    //promise five
    const promisefive = new Promise(function(resolve,reject){
        setTimeout(function(){
            // let error = true;
            let error = false;
    
            if(!error){
                resolve({username: "JavaScript", password: "123"});
            }
            else{
                reject("ERROR: Something went wrong")
            }
        },1000)
    })

    async function consumePromisefive(){
        try{
            const response = await promisefive
            console.log(response);
        }catch(error){
            console.log(error);
        }
    }
    consumePromisefive();


    
    // async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all