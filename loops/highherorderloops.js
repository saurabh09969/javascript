//for of
//["","",""]
//[{},{},{}]

// const map = new Map()
// map.set('In' , "India")
// map.set('usa', "america")
// map.set('fr', "france");
// 
// console.log(map)
// 
// for(const key of map){  //for of loop
    // console.log(key);
// }
// 
// for(const [key,value] of map){ // destructure of array
    // console.log(key,'=>',value);
// }
// 
// const myObj = { 
    // js: 'javascript',
    // cpp: 'c++',
    // rb: 'ruby',
    // swift: 'swift by apple'
// }
// for(const key in myObj){   //for in loop 
    // console.log(`${key} for ${myObj[key]}`)
// }
// console.log(" ")

const coding = ["js","ruby","java","python","cpp"]
// coding.forEach(function (i) {  //using normal function
    // console.log(i);
// })
// console.log(" ")
// coding.forEach( (item ) =>  {  //using arrow function
    // console.log(item);
// })

//can use .map insted of forEach

coding.forEach((item,index,arr)  =>{
    console.log(item,index,arr);
})

const mycoding = [{
    languageName: "javascript",
    languageFilename: "js"
}
]
mycoding.forEach((item) => {
console.log(item.languageFilename)
})
